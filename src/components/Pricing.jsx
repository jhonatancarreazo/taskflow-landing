import React from "react"

export default function Pricing() {
  return (
    <section className="bg-gray-100 py-20 min-h-screen flex items-center" id="pricing" data-aos="zoom-in">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Basic</h3>
            <p className="text-3xl mt-4">$19</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="text-3xl mt-4">$39</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Enterprise</h3>
            <p className="text-3xl mt-4">$79</p>
          </div>

        </div>

      </div>

    </section>
  )
}