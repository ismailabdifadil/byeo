import React from 'react'
import Button from './shared/Button'
import childrenImg from '/assets/children.jpg'
const WhoWeAre = () => {
  return (
    <div>
      <h1 className='section-title'>Who We Are</h1>
      <div className='bg-brand-lightBlue'>
        <div className='container flex flex-col-reverse md:flex-row items-center justify-between p gap-5'>
          <div className='flex flex-col gap-5 md:w-1/2'>
            <p className='text-body text-brand-lightBody'>
              BYEO is Somali non-governmental, non-political and non-profit
              making organization focusing on Youth of Empowerment, Water
              hygiene/sanitation, income Generation, Protection, Human rights ,
              Awareness and Advocacy, Community Based Partnerships and
              Communication & Skills Development. <br />
              <br />
              The philosophy of the institution is to improve the living
              standard of the target community. BYEO is an active institution
              established in 15th May 2010 by a group of educated Somalis
              responding to their moral obligation regarding miserable
              conditions of Somali community of youth.
            </p>
            <div className='mb-5'>
              <Button className='w-fit'>Learn More</Button>
            </div>
          </div>
          <div>
            <img src={childrenImg} className='hidden md:block' alt='Children' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
