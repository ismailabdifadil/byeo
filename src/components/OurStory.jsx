
import React from 'react'
import data from '../data/about-us.json' // Import the JSON file

const OurStory = () => {
  const { title, story, sections } = data

  return (
    <div>
      {/* Section Title */}
      <h2 className='section-title'>{title}</h2>

      <div className='bg-brand-primary text-white'>
        <div className='container lg:px-8 grid md:grid-cols-2 py-16 mt-16 gap-12 px-4 sm:px-6 md:px-10'>
          {/* Our Story Section */}
          <div className='space-y-6'>
            <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
              {story.title}
            </h3>
            <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
              {story.content}
            </p>
          </div>

          {/* Dynamic Sections */}
          <div className='flex flex-col gap-8'>
            {sections.map((section, index) => (
              <div key={index} className='flex flex-col gap-4'>
                <div className='flex gap-4 items-center'>
                  <img
                    src={section.icon}
                    alt={`${section.title} Icon`}
                    className='w-8 h-8 sm:w-10 sm:h-10'
                  />
                  <h3 className='text-2xl sm:text-3xl font-semibold'>
                    {section.title}
                  </h3>
                </div>
                <p className='text-sm sm:text-base leading-relaxed'>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
