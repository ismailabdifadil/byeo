const Card = ({ title, icon, content }) => {
  return (
    <div className='border border-[#A3A3A3]/20 rounded-lg p-6 transition duration-300 ease-in-out hover:bg-brand-primary hover:text-white hover:shadow-lg'>
      <div className='flex items-center gap-4'>
        <div className='bg-white p-3 rounded-lg border border-[#A3A3A3]/20'>
          <img src={icon} alt={`${title} icon`} className='w-10 h-10' />
        </div>
        <h3 className='text-xl font-semibold'>{title}</h3>
      </div>
      <p className='mt-4 text-sm leading-relaxed'>{content}</p>
    </div>
  )
}

export default Card
