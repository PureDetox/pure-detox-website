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
      } else if (pathSegments[0] === 'privacy') {
        newBreadcrumbs.push({ label: 'Privacy Policy', href: '/privacy' });
      } else if (pathSegments[0] === 'terms') {
        newBreadcrumbs.push({ label: 'Terms of Service', href: '/terms' });
      }
      
      setBreadcrumbs(newBreadcrumbs);
    }
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <Link href="/" className="flex items-center space-x-3">
             <img 
               src="/logo.jpg" 
               alt="Pure Detox Logo" 
               className="w-10 h-10 rounded-xl shadow-lg object-cover"
               width={40}
               height={40}
             />
             <div className="flex flex-col">
               <span className="text-xl font-bold text-gray-900">Pure Detox</span>
               <span className="text-xs text-gray-500 hidden sm:block">Digital Detox for Android</span>
             </div>
           </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Terms
            </Link>
            <a 
              href="mailto:ridwan@puredetox.app" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <a 
              href="mailto:ridwan@puredetox.app" 
              className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 1 && (
          <div className="pb-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
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
                        className="text-gray-500 hover:text-blue-600 transition-colors"
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
