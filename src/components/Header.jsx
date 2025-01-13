import { MdClose } from 'react-icons/md'
import Navbar from './Navbar'
import { IoMdMenu } from 'react-icons/io'
import { useState } from 'react'
import MobileNavbar from './MobileNavbar'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <div className='py-4 w-full border-b-[1.5px] border-brand-stroke  bg-white sticky top-0 z-40'>
        <div className='container flex justify-between items-center'>
          <Link to='/' onClick={() => setIsOpen(false)}>
            <img
              className='w-16 md:w-20'
              src='/logo.svg'
              alt='Logo'
              width={100}
            />
          </Link>
          <div>
            <Navbar />
          </div>
          {isOpen ? (
            <MdClose
              aria-label='Close menu'
              size={40}
              className={`transition-all cursor-pointer ] md:hidden ${
                isOpen ? 'text-white' : 'text-brand-primary'
              }`}
              onClick={toggleNavbar}
            />
          ) : (
            <IoMdMenu
              aria-label='Open menu'
              size={42}
              className={`transition-all cursor-pointer z-[50] md:hidden ${
                isOpen ? 'text-white' : 'text-brand-primary'
              }`}
              onClick={toggleNavbar}
            />
          )}
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-brand-primary text-white transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-lg z-40`}
      >
        <MobileNavbar toggleNavbar={toggleNavbar} />
      </div>
    </>
  )
}

export default Header
