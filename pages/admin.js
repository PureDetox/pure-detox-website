import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import LoginForm from '../components/LoginForm';
import { auth, db } from '../firebase';

const ADMIN_EMAIL = 'ridwan@puredetox.app';
const REFRESH_INTERVAL_MS = 15000;
const PRICE_PER_PREMIUM_USER = 2.99;

function formatRevenue(value) {
  return `$${value.toFixed(2)}`;
}

function formatConversion(value) {
  return `${value.toFixed(1)}%`;
}

function buildReferralRows(snapshot) {
  const grouped = new Map();

  snapshot.forEach((doc) => {
    const data = doc.data();
    const creator =
      typeof data.referral_source === 'string' && data.referral_source.trim()
        ? data.referral_source.trim()
        : 'organic';

    if (!grouped.has(creator)) {
      grouped.set(creator, { creator, installs: 0, paid: 0 });
    }

    const entry = grouped.get(creator);
    entry.installs += 1;
    if (data.isPremium === true) {
      entry.paid += 1;
    }
  });

  return [...grouped.values()]
    .map((entry) => {
      const revenue = entry.paid * PRICE_PER_PREMIUM_USER;
      const conversion = entry.installs ? (entry.paid / entry.installs) * 100 : 0;

      return {
        ...entry,
        revenue,
        conversion,
      };
    })
    .sort((left, right) => right.revenue - left.revenue);
}

export default function AdminPage() {
  const [authLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [rows, setRows] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataError, setDataError] = useState('');
  const [lastUpdated, setLastUpdated] = useState(null);

  const isAdmin = useMemo(() => user?.email === ADMIN_EMAIL, [user]);

  const loadDashboard = useCallback(async () => {
    if (!isAdmin) {
      return;
    }

    setDataLoading(true);
    setDataError('');

    try {
      const snapshot = await getDocs(collection(db, 'users'));
      setRows(buildReferralRows(snapshot));
      setLastUpdated(new Date());
    } catch (firebaseError) {
      setDataError(firebaseError.message || 'Unable to load dashboard data.');
    } finally {
      setDataLoading(false);
    }
  }, [isAdmin]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isAdmin) {
      setRows([]);
      return undefined;
    }

    loadDashboard();
    const intervalId = setInterval(loadDashboard, REFRESH_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [isAdmin, loadDashboard]);

  return (
    <>
      <Head>
        <title>PureDetox Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="mx-auto w-full max-w-6xl">
          {authLoading ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-sm text-gray-600 shadow-sm">
              Checking authentication...
            </div>
          ) : null}

          {!authLoading && !user ? (
            <div className="flex min-h-[70vh] items-center justify-center">
              <LoginForm />
            </div>
          ) : null}

          {!authLoading && user && !isAdmin ? (
            <div className="rounded-2xl border border-red-200 bg-white p-8 shadow-sm">
              <h1 className="text-2xl font-semibold text-gray-900">Access Denied</h1>
              <p className="mt-2 text-sm text-gray-600">
                Signed in as {user.email}, but this account is not allowed to open the admin dashboard.
              </p>
              <button
                type="button"
                onClick={() => signOut(auth)}
                className="mt-6 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          ) : null}

          {!authLoading && isAdmin ? (
            <section className="space-y-6">
              <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">PureDetox Admin</p>
                  <h1 className="mt-2 text-3xl font-semibold text-gray-900">Referral Performance</h1>
                  <p className="mt-2 text-sm text-gray-600">
                    Logged in as {user.email}
                    {lastUpdated ? ` • Updated ${lastUpdated.toLocaleTimeString()}` : ''}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={loadDashboard}
                    disabled={dataLoading}
                    className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {dataLoading ? 'Refreshing...' : 'Refresh'}
                  </button>
                  <button
                    type="button"
                    onClick={() => signOut(auth)}
                    className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {dataError ? (
                  <div className="border-b border-red-200 bg-red-50 px-6 py-4 text-sm text-red-700">{dataError}</div>
                ) : null}

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Creator</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Installs</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Paid</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Revenue</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Conversion</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      {dataLoading && rows.length === 0 ? (
                        <tr>
                          <td className="px-6 py-8 text-sm text-gray-500" colSpan={5}>
                            Loading dashboard data...
                          </td>
                        </tr>
                      ) : null}

                      {!dataLoading && rows.length === 0 ? (
                        <tr>
                          <td className="px-6 py-8 text-sm text-gray-500" colSpan={5}>
                            No referral data found in the `users` collection.
                          </td>
                        </tr>
                      ) : null}

                      {rows.map((row) => (
                        <tr key={row.creator}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.creator}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{row.installs}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{row.paid}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{formatRevenue(row.revenue)}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{formatConversion(row.conversion)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </main>
    </>
  );
}
