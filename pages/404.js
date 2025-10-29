import React from 'react'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-5xl font-bold mb-6 text-[#ff8a00]">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-500 mb-8 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-[#ff8a00] text-white rounded-md hover:bg-[#e67e00] transition-colors"
      >
        Return Home
      </a>
    </div>
  )
}