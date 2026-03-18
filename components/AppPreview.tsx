"use client";

import React, { useState } from "react";

export default function AppPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl md:rounded-2xl p-4 md:p-8">
      <div className="text-center mb-4 md:mb-6">
        <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-2 md:mb-3">
          🎬 App Preview
        </div>
        <h2 id="preview-heading" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 px-2">
          See Pure Detox in Action
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xl mx-auto px-2">
          Watch how easy it is to block distracting apps and focus
        </p>
      </div>

      <div className="relative max-w-full md:max-w-xl mx-auto">
        <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl">
          {!videoError ? (
            <video
              key="/video6269078503128309285.mp4"
              className="w-full h-auto bg-black"
              poster="/logo.jpg"
              controls
              playsInline
              preload="metadata"
              muted
              aria-label="PureDetox app preview video showing how to block apps and websites"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadedMetadata={() => console.log('Video loaded successfully')}
              onError={(e) => {
                console.error('Video error:', e);
                setVideoError("Video failed to load. Check file name and path in /public.");
              }}
            >
              <source src="/video6269078503128309285.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
              <div className="mb-3">🎥 {videoError}</div>
              <div className="text-sm opacity-80">Expected path: /public/video6269078503128309285.mp4</div>
            </div>
          )}
        </div>

        {/* Video highlights */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-3 mt-4 md:mt-6">
          <div className="text-center p-2 md:p-3 bg-white rounded-lg shadow-sm">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
              <span className="text-blue-600 text-sm md:text-base">⚡</span>
            </div>
            <h4 className="font-semibold text-xs md:text-sm text-gray-900 mb-0.5 md:mb-1">Quick Setup</h4>
            <p className="text-[10px] md:text-xs text-gray-600">60 seconds</p>
          </div>
          
          <div className="text-center p-2 md:p-3 bg-white rounded-lg shadow-sm">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
              <span className="text-purple-600 text-sm md:text-base">🎯</span>
            </div>
            <h4 className="font-semibold text-xs md:text-sm text-gray-900 mb-0.5 md:mb-1">Smart Blocking</h4>
            <p className="text-[10px] md:text-xs text-gray-600">Target apps</p>
          </div>
          
          <div className="text-center p-2 md:p-3 bg-white rounded-lg shadow-sm">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
              <span className="text-green-600 text-sm md:text-base">📈</span>
            </div>
            <h4 className="font-semibold text-xs md:text-sm text-gray-900 mb-0.5 md:mb-1">Track Progress</h4>
            <p className="text-[10px] md:text-xs text-gray-600">See results</p>
          </div>
        </div>
      </div>
    </div>
  );
}
