const PageTitle = ({ pageTitle, cover }) => {
  return (
    <div
      className='w-full h-56 sm:h-64 md:h-72 relative'
      style={{
        backgroundImage: `url(${cover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='bg-[#2F026A]/90 absolute inset-0 flex  justify-center items-center'>
        <h2 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold'>
          {pageTitle}
        </h2>
      </div>
    </div>
  )
}

export default PageTitle
