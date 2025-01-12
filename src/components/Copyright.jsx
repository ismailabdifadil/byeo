const Copyright = () => {
  const date = new Date().getFullYear()

  return (
    <div className='bg-brand-primary py-6 sm:py-8 text-white text-center'>
      <div className='container px-4 sm:px-6 md:px-8'>
        <p className='text-xs sm:text-sm'>
          &copy; {date} Barbaarorg. All rights reserved. | Developed by{' '}
          <a
            href='https://www.linkedin.com/in/ismailabdifadil'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-brand-lightBlue transition-colors duration-200'
          >
            Ismail Abdifadil
          </a>
        </p>
      </div>
    </div>
  )
}

export default Copyright
