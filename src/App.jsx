import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"


import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])


  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </>
  )
}

export default App