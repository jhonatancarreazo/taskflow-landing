import React from "react"
export default function Features() {
  return (
    <section className="py-20 bg-white min-h-screen flex items-center" id="features" data-aos="fade-up">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-10">

          <div className="shadow nav-btn p-12">
            <h3 className="font-semibold text-3xl m-5">Task Management</h3>
            <p className="text-gray-600 mt-2">
              Organize tasks easily and track progress.
            </p>
          </div>

          <div className="shadow nav-btn p-12">
            <h3 className="font-semibold text-3xl m-5">Team Collaboration</h3>
            <p className="text-gray-600 mt-2">
              Work together with your team in real time.
            </p>
          </div>

          <div className="shadow nav-btn p-12">
            <h3 className="font-semibold text-3xl m-5">Analytics</h3>
            <p className="text-gray-600 mt-2">
              Track productivity with powerful reports.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}