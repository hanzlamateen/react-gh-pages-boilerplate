import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import corporateLogo from '../../assets/corporate.svg'
import crossBorderLogo from '../../assets/cross-border.svg'
import digitalLogo from '../../assets/digital.svg'
import privateLogo from '../../assets/private.svg'
import routes from '../constants/routes.json'
import { usePathScrollToView } from '../hooks/usePathScrollToView'

const Services = () => {
  const myRef = usePathScrollToView(routes.AboutUs)

  const services = [
    {
      title: 'Corporate Banking Services',
      logo: corporateLogo,
      details: [
        'International & Local Bank Accounts',
        'Multi-currency IBAN Accounts (over 25 currencies)',
        'Dedicated and Pooled SWIFT & SEPA Accounts',
        'Over 30 Regulated Activities',
        'Fast & Reliable B2B, B2C and Acquiring Services'
      ]
    },
    {
      title: 'Private Banking Services',
      logo: privateLogo,
      details: [
        'Operating and Savings Accounts for HNWI Clients',
        'Depositary Accounts in the Best EU Jurisdictions',
        'Top-rated Private Banks'
      ]
    },
    {
      title: 'Digital Banking',
      logo: digitalLogo,
      details: [
        'Fast Account Opening with more than 15 Neo Banks across the Globe',
        'Built-in Cryptocurrency Wallet',
        'Fiat-Cryptocurrency on and off Ramp Services: BTC, ETH, USDT and more...'
      ]
    },
    {
      title: 'Cross-Border Payments',
      logo: crossBorderLogo,
      details: [
        'Multi-currency IBAN Accounts (over 25 currencies)',
        'Dedicated and Pooled Accounts',
        'SEPA and SWIFT Cross-border Transfers',
        'Send and Receive Payments in more than 150 Countries'
      ]
    }
  ]
  return (
    <div ref={myRef} className="pt-4">
      <div className="px-4 py-20 text-center text-xl lg:px-14">
        <h1>Services</h1>
        <ScrollAnimation animateIn="animate__bounceInRight">
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="card bg-[#F3F3F3] ">
                <div className="flex">
                  <div
                    className="ml-4 h-0.5 flex-1"
                    style={{ background: 'linear-gradient(90deg, #F3F3F3 30%, #775E2B 100%)' }}
                  />
                  <div
                    className="-mt-6 flex h-12 w-12 items-center justify-center rounded-3xl"
                    style={{
                      background:
                        'linear-gradient(0deg, #C1A875 0%, #C1A875 100%), linear-gradient(77deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%)',
                      backgroundBlendMode: 'color, normal'
                    }}
                  >
                    <img className="h-6" src={service.logo} />
                  </div>
                  <div
                    className="mr-4 h-0.5 flex-1"
                    style={{ background: 'linear-gradient(90deg, #775E2B 0%, #F3F3F3 70%)' }}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title mt-3 justify-center text-2xl">{service.title}</h3>

                  <hr className="my-4 border-[#CFCFCF]" />

                  <ul className="flex list-none flex-col items-center">
                    {service.details.map((detail, index) => (
                      <li key={index} className="p-0 text-base text-[#757575]">
                        <span className="mr-2">•</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Services
