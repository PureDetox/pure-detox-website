"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp, query, where, getDocs } from "firebase/firestore";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    try {
      // Check for duplicate email
      const emailsRef = collection(db, "email_signups");
      const q = query(emailsRef, where("email", "==", email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        await addDoc(emailsRef, {
          email,
          timestamp: serverTimestamp(),
          source: "coming-soon-page",
          status: "subscribed",
        });
      }

      setStatus("success");
      setMessage("Thanks! We'll notify you when Pure Detox launches.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      const friendly = error instanceof Error && error.message.includes("Missing or insufficient permissions")
        ? "Signup blocked by database rules. Please enable Firestore and update security rules."
        : "Something went wrong. Please try again.";
      setMessage(friendly);
      console.error("Email signup error:", error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h3>
        <p className="text-gray-600">Be the first to know when Pure Detox launches on Android</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={status === "loading"}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Joining...
            </div>
          ) : status === "success" ? (
            "Subscribed! ✓"
          ) : (
            "Notify Me at Launch"
          )}
        </button>

        {message && (
          <div className={`text-center text-sm ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}>
            {message}
          </div>
        )}
      </form>

      <div className="mt-6 text-center text-xs text-gray-500">
        No spam, unsubscribe anytime. We respect your privacy.
      </div>
    </div>
  );
}
