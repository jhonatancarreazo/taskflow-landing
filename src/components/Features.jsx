import React from "react"
export default function Features() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-10">

          <div>
            <h3 className="font-semibold text-xl">Task Management</h3>
            <p className="text-gray-600 mt-2">
              Organize tasks easily and track progress.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Team Collaboration</h3>
            <p className="text-gray-600 mt-2">
              Work together with your team in real time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Analytics</h3>
            <p className="text-gray-600 mt-2">
              Track productivity with powerful reports.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}