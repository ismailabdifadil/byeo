// import React from 'react'

// const Program = ({ title, description, index, icon }) => {
//   const bgClass =
//     index === 0
//       ? 'bg-brand-lightPeach'
//       : index === 1
//       ? 'bg-brand-lightMint'
//       : 'bg-brand-lightBlue'

//   return (
//     <>
//       <div className={`px-5 py-10 rounded-[10px] ${bgClass}`}>
//         <div className='flex items-center gap-4'>
//           <div className='bg-white p-2 rounded-[10px]'>
//             <img src={icon} alt='' />
//           </div>
//           <h3 className='text-h3'>{title}</h3>
//         </div>
//         <p className='mt-12 text-body'>
//           {description.map((text, idx) => (
//             <React.Fragment key={idx}>
//               {text}
//               <br /> <br />
//             </React.Fragment>
//           ))}
//         </p>
//       </div>
//     </>
//   )
// }

// export default Program

import React from 'react'

const Program = ({ title, description, index, icon }) => {
  // Define background class dynamically
  const bgClass =
    index === 0
      ? 'bg-brand-lightPeach'
      : index === 1
      ? 'bg-brand-lightMint'
      : 'bg-brand-lightBlue'

  return (
    <div className={`px-6 py-8 rounded-lg ${bgClass} shadow-sm`}>
      {/* Header */}
      <div className='flex items-center gap-4'>
        {/* Icon */}
        <div className='bg-white p-3 rounded-lg shadow-sm'>
          <img
            src={icon}
            alt={`${title} icon`}
            className='w-8 h-8 sm:w-10 sm:h-10'
          />
        </div>
        {/* Title */}
        <h3 className='text-lg sm:text-xl font-semibold'>{title}</h3>
      </div>

      {/* Description */}
      <p className='mt-6 text-sm sm:text-base leading-relaxed'>
        {description.map((text, idx) => (
          <React.Fragment key={idx}>
            {text}
            {idx < description.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </React.Fragment>
        ))}
      </p>
    </div>
  )
}

export default Program
