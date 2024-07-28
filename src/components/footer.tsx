import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMeta, FaTwitter } from 'react-icons/fa6'
import logo from '../../assets/logo.png'
import packageJson from '../../package.json'
import routes from '../constants/routes.json'
import { useForceNavigate } from '../hooks/useForceNavigate'

const Footer = () => {
  const navigate = useForceNavigate()
  const socialLinks = [
    {
      link: 'https://github.com/hanzlamateen',
      icon: <FaGithub color="black" />
    },
    {
      link: 'https://www.linkedin.com/in/hanzlamateen/',
      icon: <FaLinkedinIn color="black" />
    },
    {
      link: 'https://www.twitter.com/hanzlamateen/',
      icon: <FaTwitter color="black" />
    },
    {
      link: 'https://www.facebook.com/hanzlamateen/',
      icon: <FaMeta color="black" />
    },
    {
      link: 'mailto:hanzlamateen@live.com',
      icon: <FaEnvelope color="black" />
    }
  ]

  return (
    <div className="px-4 lg:px-14">
      <hr className="mb-10 mt-0 border-[#DBDBDB]" />

      <div className="grid grid-cols-1 items-end gap-1 md:grid-cols-3 md:gap-20	">
        <ScrollAnimation animateIn="animate__bounceInRight">
          <a
            className="btn btn-ghost block h-auto"
            onClick={() => {
              navigate('/')
              globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}
          >
            <img style={{ height: '80px' }} src={logo} alt={packageJson.name} />
          </a>
        </ScrollAnimation>

        <div className="flex gap-2">
          {socialLinks.map((socialLink, index) => (
            <a key={index} className="btn btn-circle" href={socialLink.link} target="_blank">
              {socialLink.icon}
            </a>
          ))}
        </div>

        <p>
          Source:
          <a className="ml-1" target="_blank" href={`https://github.com/hanzlamateen/${packageJson.name}`}>
            {packageJson.name}
          </a>
        </p>
      </div>

      <hr className="my-5 border-[#DBDBDB]" />

      <div className="mb-6 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-20">
        <div className="text-base text-zinc-500">
          <a
            className="link no-underline"
            onClick={() => {
              navigate(routes.Privacy)
              globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}
          >
            Privacy Policy
          </a>
        </div>
        <div>
          {new Date().getFullYear()} copyrights {packageJson.name}
        </div>
      </div>
    </div>
  )
}

export default Footer
