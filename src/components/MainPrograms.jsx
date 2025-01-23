import React from 'react'
import MainProgram from './MainProgram'
import programs from '../data/main-programs.json'
import AnimatedSection from './AnimatedSection'

const MainPrograms = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='container sm:px-6 lg:px-8'>
        <h2 className='section-title'>Our Main Programs</h2>
        {programs.map((program, index) => (
          <AnimatedSection>
            <MainProgram
              key={index}
              title={program.title}
              description={program.description}
              bullets={program.bullets}
              image={program.image}
              reverse={index % 2 !== 0}
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

export default MainPrograms
