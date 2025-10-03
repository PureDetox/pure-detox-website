"use client";

import { useState } from "react";

interface EmailSignupFormProps {
  variant?: "light" | "dark";
}

export default function EmailSignupForm({ variant = "light" }: EmailSignupFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    try {
      // For now, we'll just simulate success
      // In production, you would integrate with your email service here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus("success");
      setMessage("🎉 You're on the waitlist! We'll notify you when Pure Detox launches.");
      setEmail("");
      
      // Track the signup (you can add analytics here)
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "email_signup", {
          event_category: "engagement",
          event_label: "coming_soon_waitlist"
        });
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const isDark = variant === "dark";
  const inputClasses = isDark 
    ? "flex-1 px-6 py-4 text-gray-900 placeholder-gray-500 rounded-l-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent" 
    : "flex-1 px-6 py-4 text-gray-900 placeholder-gray-500 rounded-l-lg border border-r-0 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  
  const buttonClasses = isDark
    ? "px-8 py-4 bg-white text-blue-600 font-semibold rounded-r-lg hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    : "px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg";

  if (status === "success") {
    return (
      <div className={`text-center p-6 rounded-2xl ${isDark ? 'bg-white bg-opacity-10' : 'bg-green-50 border border-green-200'}`}>
        <div className="text-4xl mb-4">🎉</div>
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-green-800'}`}>
          Welcome to the waitlist!
        </h3>
        <p className={`${isDark ? 'text-white opacity-90' : 'text-green-600'}`}>
          We'll email you as soon as Pure Detox is available, plus you'll get exclusive early-bird pricing!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          className={inputClasses}
          required
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className={buttonClasses}
        >
          {status === "loading" ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              Joining...
            </div>
          ) : (
            "Join Waitlist"
          )}
        </button>
      </form>

      {status === "error" && (
        <div className={`text-center p-3 rounded-lg ${isDark ? 'bg-red-500 bg-opacity-20 text-red-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
          {message}
        </div>
      )}

      <div className="text-center">
        <p className={`text-sm ${isDark ? 'text-white opacity-70' : 'text-gray-500'}`}>
          🔒 We respect your privacy. No spam, unsubscribe anytime.
        </p>
        <div className="flex items-center justify-center gap-4 mt-3 text-xs">
          <span className={`flex items-center gap-1 ${isDark ? 'text-white opacity-60' : 'text-gray-400'}`}>
            ✓ Early access notifications
          </span>
          <span className={`flex items-center gap-1 ${isDark ? 'text-white opacity-60' : 'text-gray-400'}`}>
            ✓ Exclusive launch pricing
          </span>
        </div>
      </div>
    </div>
  );
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
