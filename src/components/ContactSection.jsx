import React from 'react'
import Button from './shared/Button'
import emailjs from 'emailjs-com'
const ContactSection = () => {
  const contactInfo = [
    {
      icon: '/assets/icons/location-icon.svg',
      title: 'Head Office',
      content: 'Baidoa, Somalia',
      subContent: 'Sub Offices: Bakool, Lower Shebelle, and Benadir',
    },
    {
      icon: '/assets/icons/email-icon.svg',
      title: 'Email',
      content: 'info@barbaarorg.org',
      subContent: null,
    },
    {
      icon: '/assets/icons/phone-icon.svg',
      title: 'Phone',
      content: '+252615558264',
      subContent: null,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPALETE_ID,
        e.target,
        import.meta.env.VITE_APP_USER_ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!')
          e.target.reset()
        },
        (error) => {
          console.error('EmailJS Error:', error)
          alert('An error occurred. Please try again.')
        }
      )
  }
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', 'cbcac84d-49f8-47a0-891d-cf3aa2c08c78')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      alert('Form Submitted Successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
    }
  }

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
        {/* Contact Info */}
        <div>
          <h2 className='text-3xl font-bold mb-8'>Get In Touch With Us</h2>
          {contactInfo.map((info, index) => (
            <div key={index} className='flex items gap-4 mb-6'>
              {/* Icon */}
              <img
                src={info.icon}
                alt={`${info.title} Icon`}
                className='w-6 h-6 flex-shrink-0'
              />
              {/* Text Content */}
              <div>
                <h4 className='text-lg font-semibold'>{info.title}</h4>
                <p className='text-sm text-gray-700'>{info.content}</p>
                {info.subContent && (
                  <p className='text-sm text-gray-500'>{info.subContent}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div>
          <h2 className='text-3xl font-bold mb-8'>Send Message</h2>
          <form className='space-y-5' onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              className='input'
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='input'
            />
            <textarea
              rows='6'
              placeholder='Message'
              name='message'
              className='input'
            ></textarea>
            <Button type='submit'>Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
