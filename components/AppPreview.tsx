"use client";

import React, { useState } from "react";

export default function AppPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  return (
    // Changed container to white with a professional shadow border
    <div className="relative bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-2xl shadow-gray-200/50">
      <div className="text-center mb-8 md:mb-10">
        <h2 id="preview-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 px-2">
          See Pure Detox in Action
        </h2>
        <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto px-2">
          Watch how easy it is to block distracting apps and regain your focus in under 60 seconds.
        </p>
      </div>

      <div className="relative max-w-[320px] md:max-w-md mx-auto">
        {/* Phone Frame Border */}
        <div className="relative bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-gray-900 aspect-[9/19]">
          {!videoError ? (
            <video
              key="/video6269078503128309285.mp4"
              className="w-full h-full object-cover bg-black"
              poster="/logo.jpg"
              controls
              playsInline
              preload="metadata"
              muted
              aria-label="PureDetox app preview video"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={(e) => {
                console.error('Video error:', e);
                setVideoError("Video failed to load.");
              }}
            >
              <source src="/video6269078503128309285.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
              <div className="mb-3">⚠️ {videoError}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
