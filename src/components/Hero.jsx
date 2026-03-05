import React from "react"
export default function Hero() {
  return (
    <section className="bg-slate-900 text-white min-h-screen flex items-center" data-aos="fade-right">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold">
          Manage Your Work with TaskFlow
        </h1>

        <p className="mt-6 text-gray-300">
          Organize tasks, boost productivity and collaborate with your team.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg">
            Get Started
          </button>

          <button className="border border-gray-400 hover:border-indigo-700 px-6 py-3 rounded-lg">
            Live Demo
          </button>
        </div>

      </div>
    </section>
  )
}