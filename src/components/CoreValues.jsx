import React from 'react'
import Card from './shared/Card'
import coreValues from '../data/core-values.json'

const CoreValues = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='container sm:px-6 lg:px-8'>
        <h2 className='section-title'>Our Core Values</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {coreValues.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              icon={value.icon}
              content={value.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
