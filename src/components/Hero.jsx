import { Link } from 'react-router-dom'
import Button from './shared/Button'
import heroImg from '/assets/hero-img.png'
import heroPattern from '/assets/hero-pattern.jpg'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div
      className='bg-cover bg-center h-screen'
      style={{
        backgroundImage: `url(${heroPattern})`,
      }}
    >
        <div className='container sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between py-32 md:py-10 lg:py-20 '>
          {/* Left Content */}
          <div className='md:w-1/2 lg:w-2/3'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-normal  md:text-left'>
              Inspiring Youth to <br className='hidden md:block' />
              Lead the Way in
              <br className='hidden md:block' /> Building Stronger Communities
            </h1>

            <p className='text-brand-lightBody mt-4 mb-8 text-sm sm:text-base md:w-[450px] lg:w-[500px] mx-auto md:mx-0'>
              Empowering the next generation to thrive through education,
              advocacy, and community development.
            </p>
            <div className=' flex flex-col gap-3 md:flex-row'>
              <Link to='/about-us'>
                <Button className='w-full md:w-fit'>About Us</Button>
              </Link>
              <Link to='/programs'>
                <Button variant='outline' className='w-full md:w-fit'>
                  Our Programs
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <img
              src={heroImg}
              className='hidden md:block w-[280px] sm:w-[320px] lg:w-[400px]'
              alt='Communities'
            />
          </div>
        </div>
    </div>
  )
}

export default Hero
