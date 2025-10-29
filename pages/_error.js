import React from 'react'

function Error({ statusCode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-5xl font-bold mb-6 text-[#ff8a00]">{statusCode || 'Error'}</h1>
      <h2 className="text-3xl font-semibold mb-4">
        {statusCode === 404 ? 'Page Not Found' : 'An Error Occurred'}
      </h2>
      <p className="text-lg text-gray-500 mb-8 text-center max-w-md">
        {statusCode === 404
          ? "The page you are looking for doesn't exist or has been moved."
          : "We're sorry, something went wrong. Please try again later."}
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error