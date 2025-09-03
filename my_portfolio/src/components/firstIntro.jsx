import React from 'react'

const FirstIntro = () => {
  return (
    <div className="relative flex justify-center gap-10 items-center h-screen overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient bg-[length:400%_400%]"></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex p-10 gap-20 items-center">
        <div className="space-y-6">
          <h1 className="text-white text-6xl font-bold">
            Hello, I'm Soy Chanratana
          </h1>
          <h2 className="text-white text-4xl">
            I'm a sophomore of Cambodia Academy of Digital Technology specialize
            of Software Engineering.
          </h2>
          <p className="text-lg text-gray-300">
            Welcome to my portfolio website.
          </p>
        </div>
        <img src="/9-removebg-preview.png" alt="profile" className="w-100" />
      </div>
    </div>
  )
}

export default FirstIntro
