import { Link } from 'react-router-dom'
import logo from '/logo.svg'
import { BsFacebook, BsWhatsapp } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='bg-white'>
      <div className='container grid md:grid-cols-3 py-24 gap-4'>
        <div className='flex flex-col space-y-4'>
          <div className='flex items-center gap-4'>
            <img src={logo} className='w-16 md:w-20' alt='' />
            <h1 className='text-h2 text-brand-primary'>BYEO</h1>
          </div>
          <p className='text-sm font-light w-64'>
            BYEO is a Somali non-profit focused on youth empowerment,
            sanitation, income generation, human rights, and community
            development.
          </p>
          <div className='flex gap-4'>
            <div className='bg-brand-lightPeach p-2 rounded-lg'>
              <a
                href='https://www.facebook.com/diinsaalow'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsFacebook
                  size={28}
                  className='text-brand-primary hover:text-purple-600 cursor-pointer'
                />
              </a>
            </div>
            <div className='bg-brand-lightPeach p-2 rounded-lg '>
              <a
                href='https://wa.me/252615558264'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsWhatsapp
                  size={28}
                  className='text-brand-primary hover:text-purple-600 cursor-pointer'
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-h3 mb-6'>Quick Links</h3>
          <ul className='flex flex-col space-y-5'>
            <Link to='/'>Home</Link>
            <Link to='/about-us'>About Us</Link>
            <Link to='/programs'>Programs</Link>
            <Link to='/contact-us'>Contact Us</Link>
          </ul>
        </div>
        <div>
          <h3 className='text-h3 mb-6'>Contact Us</h3>
          <ul className='flex flex-col space-y-3'>
            <li className='flex flex-col gap-2'>
              <h4 className='font-medium'>Phone Number</h4>
              <a href='' className='text-purple-800 cursor-pointer'>
                +252-61 5558264
              </a>
            </li>
            <li>
              <h4 className='font-medium'>Email</h4>
              <a
                href='mailto:info@barbaarorg.org'
                className='text-purple-800 cursor-pointer'
              >
                info@barbaarorg.org
              </a>
            </li>
            <li>
              <h4 className='font-medium'>Website</h4>
              <a
                href='https://www.barbaarorg.org'
                target='_blank'
                className='text-purple-800 cursor-pointer'
              >
                www.barbaarorg.org
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
