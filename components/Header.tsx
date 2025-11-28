"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Header() {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([{ label: 'Home', href: '/' }]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      const pathSegments = pathname.split('/').filter(segment => segment !== '');
      const newBreadcrumbs: BreadcrumbItem[] = [
        { label: 'Home', href: '/' }
      ];
      
      if (pathSegments.length === 0) {
        setBreadcrumbs(newBreadcrumbs);
        return;
      }
      
             // Add breadcrumbs based on current path
             if (pathSegments[0] === 'pricing') {
               newBreadcrumbs.push({ label: 'Pricing', href: '/pricing' });
             } else if (pathSegments[0] === 'permissions') {
               newBreadcrumbs.push({ label: 'Permissions', href: '/permissions' });
             } else if (pathSegments[0] === 'privacy') {
               newBreadcrumbs.push({ label: 'Privacy Policy', href: '/privacy' });
             } else if (pathSegments[0] === 'terms') {
               newBreadcrumbs.push({ label: 'Terms of Service', href: '/terms' });
             } else if (pathSegments[0] === 'account-deletion') {
               newBreadcrumbs.push({ label: 'Account Deletion', href: '/account-deletion' });
             }
      
      setBreadcrumbs(newBreadcrumbs);
    }
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
           {/* Logo */}
           <Link href="/" className="flex items-center space-x-3" aria-label="Pure Detox Home">
             <img 
               src="/logo.jpg" 
               alt="Pure Detox - Android App Blocker and Digital Detox App Logo" 
               className="w-10 h-10 rounded-xl shadow-lg object-cover"
               width={40}
               height={40}
               loading="eager"
             />
             <div className="flex flex-col">
               <span className="text-xl font-bold text-gray-900">Pure Detox</span>
               <span className="text-xs text-gray-500 hidden sm:block">Digital Detox for Android</span>
             </div>
           </Link>

                 {/* Navigation */}
                 <nav className="hidden md:flex items-center space-x-6">
                   <Link href="/pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                     Pricing
                   </Link>
                   <Link href="/permissions" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                     Permissions
                   </Link>
                   <Link href="/privacy" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                     Privacy
                   </Link>
                   <Link href="/terms" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                     Terms
                   </Link>
            <a 
              href="https://play.google.com/store/apps/details?id=com.nexusedge.puredetox"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Download
            </a>
            <a 
              href="mailto:ridwan@puredetox.app" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a 
              href="https://play.google.com/store/apps/details?id=com.nexusedge.puredetox"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium min-h-[44px] flex items-center"
            >
              Download
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-1">
              <Link 
                href="/pricing" 
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/permissions" 
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Permissions
              </Link>
              <Link 
                href="/privacy" 
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms
              </Link>
              <a 
                href="mailto:ridwan@puredetox.app" 
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}

        {/* Breadcrumbs */}
        {breadcrumbs.length > 1 && (
          <div className="pb-3 md:pb-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.href} className="flex items-center">
                    {index > 0 && (
                      <span className="text-gray-400 mx-2">/</span>
                    )}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-gray-900 font-medium">{crumb.label}</span>
                    ) : (
                      <Link 
                        href={crumb.href} 
                        className="text-gray-500 hover:text-blue-600 transition-colors min-h-[44px] flex items-center"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
