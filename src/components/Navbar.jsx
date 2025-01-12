import { NavLink } from 'react-router-dom'
import Button from './shared/Button'

const Navbar = () => {
  const links = ['Home', 'About Us', 'Programs', 'Contact Us']
  return (
    <nav className='flex items-center justify-between'>
      <div className='hidden md:flex md:items-center md:space-x-10'>
        <ul className='flex space-x-12'>
          {links.map((item, index) => {
            const to = item.split(' ').join('-').toLowerCase()
            return (
              <li key={index}>
                <NavLink
                  to={`/${to}`}
                  className={({ isActive }) =>
                    `text-lg font-medium hover:text-brand-primary transition ${
                      isActive && 'text-brand-primary'
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <Button>Contact Us</Button>
      </div>
    </nav>
  )
}

export default Navbar
