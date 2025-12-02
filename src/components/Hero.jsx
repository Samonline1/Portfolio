import React from 'react'
import img from '/src/assets/GeminiBannerUp.png'

const Hero = () => {
  return (
    <div className='p-10 h-[100vh] bg-gradient-to-b from-black via-black to-gray-800 text-white '
    style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        {/* nav */}
<nav className='flex items-center justify-between '>
    <p className='text-xl font-bold text-white'>Portfolio</p>
    <p className='text-lg text-gray-300'>Discover my projects, skills, and experience.</p> 
    <button className='bg-green-600 px-3 py-1 rounded-2xl text-black'>Contact</button>
</nav>

<div className='flex flex-col justify-center items-center h-full'>
    <h4 className='text-[55px] font-bold text-gray-800/80'>Frontend</h4>
    <h1 className='text-[90px] font-bold text-gray-800/80 '>Developer</h1>
</div>

<div className='absolute bottom-0 right-0  text-white w-full bg-gradient-to-t from-black via-black/80 to-transparent '>

<div className='flex  flex justify-between m-10'>
nfjkfjv
dfjf
<p>jdhejd</p>
</div>
</div>




    </div>
  )
}

export default Hero