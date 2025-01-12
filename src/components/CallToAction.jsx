import Button from './shared/Button'
import smillingBoy from '/assets/smilling-boy.png'

const CallToAction = () => {
  return (
    <div className='bg-brand-lightBlue'>
      <div className='container sm:px-6 lg:px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
        <div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-tight '>
            Together, We Can Build Stronger Communities!
          </h1>
          <p className='text-sm md:text-base my-4 font-light  w-full md:w-10/12'>
            Your support helps us provide education, protect children, and
            empower communities in Somalia.
          </p>
          <Button className='mt-6'>Contact Us</Button>
        </div>

        <div className='flex justify-center'>
          <img
            src={smillingBoy}
            alt='Smiling boy representing the community support'
            className='rounded-lg shadow-lg max-w-full h-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default CallToAction
