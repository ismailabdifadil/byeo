import { useLocation } from 'react-router-dom'
import aboutCover from '/assets/about-cover.png'

const PageTitle = () => {
  const location = useLocation()
  return (
    <div
      className='w-full h-56 sm:h-64 md:h-72 relative'
      style={{
        backgroundImage: `url(${aboutCover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className='bg-brand-primary/90 absolute inset-0 flex flex-col justify-center items-center'>
        <h2 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold'>
          About Us
        </h2>
        <p className='text-slate-200 text-[10px]'>Home{location.pathname}</p>
      </div>
    </div>
  )
}

export default PageTitle
