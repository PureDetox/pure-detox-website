"use client";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type CTAButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
  }
>;

export default function CTAButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: CTAButtonProps) {
  const base =
    "cta inline-flex items-center justify-center gap-2 rounded-full transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40 disabled:opacity-50 disabled:pointer-events-none";
  const sizes: Record<string, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-12 px-6 text-base",
  };
  const variants: Record<string, string> = {
    primary: "bg-black text-white hover:bg-neutral-800",
    secondary: "border border-black/10 hover:bg-neutral-100",
    ghost: "text-black hover:underline",
  };
  return (
    <button
      className={[base, sizes[size], variants[variant], className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}


