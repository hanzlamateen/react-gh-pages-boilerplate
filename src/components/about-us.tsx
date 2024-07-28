import React from 'react'
import routes from '../constants/routes.json'
import { usePathScrollToView } from '../hooks/usePathScrollToView'

const AboutUs = () => {
  const myRef = usePathScrollToView(routes.AboutUs)

  return (
    <div ref={myRef} className="container mx-auto">
      <h2>About Us</h2>
    </div>
  )
}

export default AboutUs
