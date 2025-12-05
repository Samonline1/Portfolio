import React, { forwardRef } from 'react'


const Contact = forwardRef((props, contact) => {
  return (
    <div ref={contact} className='bg-black h-[20vh] p-5 border-t border-gray-900 text-white flex items-center justify-center px-10 lg:px-20'>
<div className=' h-full p-5 flex gap-5 justify-between w-full'>

  <ul className=''>
  <p className='text-gray-700'>Connect</p>
  <div className='flex flex-col'>
  <a href="http://">Linkedin</a>
  <a href="http://">Instagram</a>
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

{/* <ul>
  <p className='text-gray-700'>Services</p>
  <p>Web deisgn & development</p>
    <p>Graphic Design</p>
</ul> */}
</div>
    </div>
  )
})

export default Contact