const Program = ({ title, description, bullets, image, reverse }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 `}
    >
      {/* Text Section */}
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <h3 className='text-2xl sm:text-3xl font-bold mb-4'>{title}</h3>
        <p className='text-sm sm:text-base leading-relaxed mb-4'>
          {description}
        </p>
        <ul className='list-none space-y-2'>
          {bullets.map((bullet, index) => (
            <li key={index} className='flex items-start gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-brand-primary'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span className='text-sm sm:text-base'>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div>
        <img
          src={image}
          alt={title}
          className={`rounded-lg shadow-sm w-full h-auto object-cover `}
        />
      </div>
    </div>
  )
}

export default Program
