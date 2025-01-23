import Program from './Program'
import programs from '../data/programs.json'

const OurPrograms = () => {
  return (
    <div className='container sm:px-6 lg:px-8 my-16'>
      {/* Title */}
      <h1 className='section-title'>Our Programs</h1>

      {/* Grid Layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {programs.map((item, index) => (
          <Program key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  )
}

export default OurPrograms
