import React, { forwardRef } from 'react'


const Contact = forwardRef((props, contact) => {
  return (
    <div ref={contact} className='bg-black h-[20vh] p-5 border-t border-purple-900 text-white flex items-center justify-center px-10 lg:px-20'>
      <div className=' h-full p-5 flex gap-5 justify-between w-full'>

        <ul className=''>
          <p className='text-gray-700'>Connect</p>
          <div className='flex flex-col'>
            <a href="https://www.linkedin.com/in/sameer-hussain-6829222a6">Linkedin</a>
          </div>
        </ul>

        <ul>
          <p className='text-gray-700'>Get in touch</p>
          <a
            href="https://mail.google.com/mail/?view=cm&to=mrsampvt@gmail.com&su=Hello%20Sameer Hussain&body=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white transition-colors"
          >
            hello@mrsam.com
          </a>
        </ul>


      </div>
    </div>
  )
})

export default Contact