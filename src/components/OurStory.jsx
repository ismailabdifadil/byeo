// import missionIcon from '/assets/icons/mission-icon.svg'
// const OurStory = () => {
//   return (
//     <div>
//       <h2 className='section-title'>About Us</h2>
//       <div className='bg-brand-primary text-white'>
//         <div className='container  lg:px-8 grid md:grid-cols-2  py-16 mt-16 gap-12 px-4 sm:px-6 md:px-10'>
//           <div className='space-y-4'>
//             <h3 className='sub-heading'>Our Story</h3>
//             <p className='text-sm sm:text-base md:text-lg leading-relaxed md:w-10/12'>
//               Barbaar Youth Empowerment Organization BYEO is a Somali
//               non-governmental, non-political, and non-profit organization
//               established on May 15, 2010 by a group of educated Somalis. BYEO
//               was born out of a moral obligation to respond to the dire
//               socio-economic conditions faced by the Somali community,
//               particularly its youth. Operating primarily in the South Central
//               regions of Somalia, including Baidoa head office, Bakool, Lower
//               Shebelle, and Benadir, BYEO is committed to addressing critical
//               issues such as youth empowerment, education, protection, human
//               rights advocacy, gender-based violence GBV, child protection, and
//               more. The organization plays a vital role in improving living
//               standards by focusing on urgent challenges stemming from civil
//               strife, poverty, and natural disasters. BYEO's work revolves
//               around empowering youth, women, and vulnerable communities to
//               overcome challenges and contribute positively to societal
//               development through programs in education, livelihoods, water
//               hygiene and sanitation WASH, protection, and community-based
//               partnerships.
//             </p>
//           </div>
//           <div className='flex flex-col gap-6'>
//             <div className='flex flex-col gap-4'>
//               <div className='flex gap-4 items-center'>
//                 <img src={missionIcon} alt='' />
//                 <h3 className='sub-heading'>Our Mission</h3>
//               </div>
//               <p className='text-sm sm:text-base md:text-lg leading-relaxed md:w-10/12'>
//                 To work with stakeholders in local youth organizations and
//                 development within and beyond Somalia to advance growth with a
//                 special emphasis on youth, children, and women. Our strategies
//                 empower these groups to play a vital role in the social,
//                 economic, political, and cultural growth of the community.
//               </p>
//             </div>
//             <div className='flex flex-col gap-4'>
//               <div className='flex gap-4 items-center'>
//                 <img src={missionIcon} alt='' />
//                 <h3 className='sub-heading'>Our Mission</h3>
//               </div>
//               <p className='text-sm sm:text-base md:text-lg leading-relaxed md:w-10/12'>
//                 To work with stakeholders in local youth organizations and
//                 development within and beyond Somalia to advance growth with a
//                 special emphasis on youth, children, and women. Our strategies
//                 empower these groups to play a vital role in the social,
//                 economic, political, and cultural growth of the community.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OurStory

// import missionIcon from '/assets/icons/mission-icon.svg'

// const OurStory = () => {
//   return (
//     <div>
//       <h2 className='section-title'>Who We Are</h2>

//       <div className='bg-brand-primary text-white'>
//         <div className='container lg:px-8 grid md:grid-cols-2 py-16  gap-12 px-4 sm:px-6 md:px-10'>
//           <div className='space-y-6'>
//             <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
//               Our Story
//             </h3>
//             <p className='text-sm sm:text-base md:text-lg leading-relaxed md:w-10/12'>
//               Barbaar Youth Empowerment Organization (BYEO) is a Somali
//               non-governmental organization founded in 2010 to address the
//               socio-economic challenges faced by youth and vulnerable
//               communities in South Central Somalia. Operating in regions like
//               Baidoa, Bakool, Lower Shebelle, and Benadir, BYEO focuses on youth
//               empowerment, education, child protection, and advocacy for human
//               rights. The organization works to improve living standards and
//               foster development through initiatives in education, livelihoods,
//               WASH (Water, Sanitation, and Hygiene), and community-based
//               partnerships.
//             </p>
//           </div>

//           <div className='flex flex-col gap-8 md:gap-14'>
//             {[
//               {
//                 title: 'Our Mission',
//                 text: 'To work with stakeholders in local youth organizations and development within and beyond Somalia to advance growth with a special emphasis on youth, children, and women. Our strategies empower these groups to play a vital role in the social, economic, political, and cultural growth of the community.',
//               },
//               {
//                 title: 'Our Vision',
//                 text: 'We envision a society where everyone is equal and developed, capable of overcoming challenges like ignorance, armed conflict, and illegal migration through integrated solutions and gender-responsive approaches.',
//               },
//             ].map((item, index) => (
//               <div key={index} className='flex flex-col gap-4'>
//                 <div className='flex gap-4 items-center'>
//                   <img
//                     src={missionIcon}
//                     alt={`${item.title} Icon`}
//                     className='w-8 h-8 sm:w-10 sm:h-10'
//                   />
//                   <h3 className='text-2xl sm:text-3xl font-semibold'>
//                     {item.title}
//                   </h3>
//                 </div>
//                 <p className='text-sm sm:text-base leading-relaxed'>
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OurStory

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
