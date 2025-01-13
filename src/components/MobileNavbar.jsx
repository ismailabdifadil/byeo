import { NavLink } from 'react-router-dom'
import Button from './shared/Button'
import { MdClose } from 'react-icons/md'

const MobileNavbar = ({ toggleNavbar }) => {
  const links = ['Home', 'About Us', 'Programs', 'Contact Us']
  return (
    <nav className='bg-brand-primary text-white px-9 py-1 relative'>
      <MdClose
        aria-label='Close menu'
        size={40}
        className='transition-all absolute top-10 right-8 cursor-pointer md:hidden text-white z-50'
        onClick={toggleNavbar}
      />
      <ul className='mt-20 space-y-6 flex flex-col'>
        {links.map((item, index) => {
          const to = item.split(' ').join('-').toLowerCase()
          return (
            <li key={index}>
              <NavLink
                to={`/${to}`}
                className={({ isActive }) =>
                  `text-lg font-semibold hover:text-purple-200 transition ${
                    isActive && 'border-b-2 border-white'
                  }`
                }
                onClick={toggleNavbar}
              >
                {item}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <div className='mt-6'>
        <Button variant='secondary' size='lg' className='mt-5'>
          Contact Us
        </Button>
      </div>
    </nav>
  )
}

export default MobileNavbar
