"use client";

type PlayStoreButtonProps = {
  url?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function PlayStoreButton({ 
  url = "https://play.google.com/store/apps/details?id=com.nexusedge.puredetox",
  size = "md",
  className = ""
}: PlayStoreButtonProps) {
  const sizes = {
    sm: "h-12 min-h-[48px]",
    md: "h-14 min-h-[56px]",
    lg: "h-16 min-h-[64px]"
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-transform hover:scale-105 active:scale-95 touch-manipulation ${sizes[size]} ${className}`}
      aria-label="Download PureDetox on Google Play"
    >
      <img
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        alt="Download PureDetox app on Google Play Store - Android app blocker and digital detox"
        className="h-full w-auto"
        width={size === "sm" ? 162 : size === "md" ? 200 : 240}
        height={size === "sm" ? 60 : size === "md" ? 74 : 90}
        loading="lazy"
      />
    </a>
  );
}

