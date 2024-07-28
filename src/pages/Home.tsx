import React from 'react'
import packageJson from '../../package.json'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-4 h-96 md:mx-auto">
        <h2>{packageJson.name}</h2>
      </div>
      <Footer />
    </div>
  )
}

export default Home
