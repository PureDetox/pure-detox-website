"use client";

import React, { useState } from "react";

export default function AppPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          🎬 App Preview
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          See Pure Detox in Action
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Watch how easy it is to block distracting apps and focus on what matters most
        </p>
      </div>

      <div className="relative max-w-md mx-auto">
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
          {!videoError ? (
            <video
              key="/video6269078503128309285.mp4"
              style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#000' }}
              poster="/logo.jpg"
              controls
              playsInline
              preload="metadata"
              muted
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
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 text-lg">⚡</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Quick Setup</h4>
            <p className="text-sm text-gray-600">Get started in under 60 seconds</p>
          </div>
          
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600 text-lg">🎯</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Smart Blocking</h4>
            <p className="text-sm text-gray-600">Target specific apps and sites</p>
          </div>
          
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 text-lg">📈</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Track Progress</h4>
            <p className="text-sm text-gray-600">See your focus improvements</p>
          </div>
        </div>
      </div>
    </div>
  );
}
