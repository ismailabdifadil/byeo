// import React from 'react'
// import Button from './shared/Button'
// import emailjs from 'emailjs-com'
// const ContactSection = () => {
//   const contactInfo = [
//     {
//       icon: '/assets/icons/location-icon.svg',
//       title: 'Head Office',
//       content: 'Baidoa, Somalia',
//       subContent: 'Sub Offices: Bakool, Lower Shebelle, and Benadir',
//     },
//     {
//       icon: '/assets/icons/email-icon.svg',
//       title: 'Email',
//       content: 'info@barbaarorg.org',
//       subContent: null,
//     },
//     {
//       icon: '/assets/icons/phone-icon.svg',
//       title: 'Phone',
//       content: '+252615558264',
//       subContent: null,
//     },
//   ]

//   return (
//     <section className='py-16 bg-white'>
//       <div className='container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
//         {/* Contact Info */}
//         <div>
//           <h2 className='text-3xl font-bold mb-8'>Get In Touch With Us</h2>
//           {contactInfo.map((info, index) => (
//             <div key={index} className='flex items gap-4 mb-6'>
//               {/* Icon */}
//               <img
//                 src={info.icon}
//                 alt={`${info.title} Icon`}
//                 className='w-6 h-6 flex-shrink-0'
//               />
//               {/* Text Content */}
//               <div>
//                 <h4 className='text-lg font-semibold'>{info.title}</h4>
//                 <p className='text-sm text-gray-700'>{info.content}</p>
//                 {info.subContent && (
//                   <p className='text-sm text-gray-500'>{info.subContent}</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact Form */}
//         <div>
//           <h2 className='text-3xl font-bold mb-8'>Send Message</h2>
//           <form className='space-y-5' onSubmit={handleSubmit}>
//             <input
//               type='text'
//               name='name'
//               placeholder='Full Name'
//               className='input'
//             />
//             <input
//               type='email'
//               name='email'
//               placeholder='Email'
//               className='input'
//             />
//             <textarea
//               rows='6'
//               placeholder='Message'
//               name='message'
//               className='input'
//             ></textarea>
//             <Button type='submit'>Send Message</Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactSection

import React, { useState } from 'react'
import Button from './shared/Button'
import { toast } from 'react-toastify'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const response = await fetch(
        'https://send-email-pn7v.onrender.com/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        toast.success('Message sent successfully!')
        setLoading(false)
        setFormData({ name: '', email: '', message: '' })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('An error occurred. Please try again.')
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
              value={formData.name}
              onChange={handleChange}
              placeholder='Full Name'
              className='input'
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              className='input'
              required
            />
            <textarea
              rows='6'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Message'
              className='input'
              required
            ></textarea>
            <Button type='submit'>
              {loading ? (
                <div className='flex items-center'>
                  <svg
                    className='animate-spin h-5 w-5 mr-3 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
