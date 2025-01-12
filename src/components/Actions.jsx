// import tickIcon from '/assets/icons/tick.svg'
// const Actions = () => {
//   return (
//     <div className='bg-brand-primary text-white'>
//       <div className='container grid md:grid-cols-2 items-center py-16 my-24 gap-10'>
//         <div className='w-1/2'>
//           {/* Left */}
//           <h1 className='heading'>BYEO in Action Key Milestones</h1>
//           <p className='text-sm mt-5'>
//             Over the years, BYEO has made a tangible impact on countless lives.
//             Here are some key figures that define our mission to empower
//             communities and protect vulnerable groups.
//           </p>
//         </div>
//         <div className='flex flex-col space-y-6'>
//           <div className='flex gap-4 mb-2 items-start'>
//             <img src={tickIcon} alt='Tick' />
//             <div>
//               <h3 className='text-xl font-medium'>Years of Service </h3>
//               <p className='text-sm text-slate-200 w-9/12'>
//                 Over <span className='font-semibold'>14 years</span> of
//                 empowering youth and improving Communities established in 2010.
//               </p>
//             </div>
//           </div>
//           <div className='flex gap-4 mb-2 items-start'>
//             <img src={tickIcon} alt='Tick' />
//             <div>
//               <h3 className='text-xl font-medium'>Community Reach</h3>
//               <p className='text-sm text-slate-200  w-9/12'>
//                 Active in{' '}
//                 <span className='font-semibold'>
//                   South Central regions of Somalia
//                 </span>
//                 , including Baidoa, Bakool, Lower Shabelle, and Benadir.
//               </p>
//             </div>
//           </div>
//           <div className='flex gap-4 mb-2 items-start'>
//             <img src={tickIcon} alt='Tick' />
//             <div>
//               <h3 className='text-xl font-medium'>Youth Empowered</h3>
//               <p className='text-sm text-slate-200  w-9/12'>
//                 Supported{' '}
//                 <span className='font-semibold'>hundreds of young people</span>{' '}
//                 through education, skills development, and anti-drug campaigns.
//               </p>
//             </div>
//           </div>
//           <div className='flex gap-4 mb-2 items-start'>
//             <img src={tickIcon} alt='Tick' />
//             <div>
//               <h3 className='text-xl font-medium'>
//                 Child Protection Initiatives
//               </h3>
//               <p className='text-sm text-slate-200 w-9/12'>
//                 Advocated for the protection and welfare of{' '}
//                 <span className='font-semibold'>numerous children</span>
//                 from violence and exploitation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Actions

import tickIcon from '/assets/icons/tick.svg'

const Actions = () => {
  const actions = [
    {
      title: 'Years of Service',
      description:
        'Over 14 years of empowering youth and improving communities established in 2010.',
    },
    {
      title: 'Community Reach',
      description:
        'Active in South Central regions of Somalia, including Baidoa, Bakool, Lower Shabelle, and Benadir.',
    },
    {
      title: 'Youth Empowered',
      description:
        'Supported hundreds of young people through education, skills development, and anti-drug campaigns.',
    },
    {
      title: 'Child Protection Initiatives',
      description:
        'Advocated for the protection and welfare of numerous children from violence and exploitation.',
    },
  ]
  return (
    <div className='bg-brand-primary text-white'>
      <div className='container grid lg:grid-cols-2 items-center py-16 mt-24 gap-10 px-4 sm:px-6 md:px-10'>
        <div className='lg:w-10/12 w-full mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
            BYEO in Action Key Milestones
          </h1>
          <p className='text-sm md:text-base mt-5'>
            Over the years, BYEO has made a tangible impact on countless lives.
            Here are some key figures that define our mission to empower
            communities and protect vulnerable groups.
          </p>
        </div>

        <div className='flex flex-col space-y-8'>
          {actions.map((item, index) => (
            <div key={index} className='flex gap-4 items-center'>
              <img
                src={tickIcon}
                alt='Tick'
                className='w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0'
              />
              <div>
                <h3 className='text-lg md:text-xl font-medium'>{item.title}</h3>
                <p className='text-sm md:text-base text-slate-200'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Actions
