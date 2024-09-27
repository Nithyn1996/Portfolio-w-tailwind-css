import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
        
            <p className='text-xl mt-20'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus unde praesentium totam ea porro sapiente harum, nemo id odit repudiandae aut ab illum nesciunt asperiores cum reiciendis rem quia omnis cupiditate? Est fugit corporis sunt doloribus aperiam temporibus! Aut hic rem laudantium culpa voluptatibus velit temporibus corrupti a omnis?
            </p>
            <br />
            <p className='text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus unde praesentium totam ea porro sapiente harum, nemo id odit repudiandae aut ab illum nesciunt asperiores cum reiciendis rem quia omnis cupiditate? Est fugit corporis sunt doloribus aperiam temporibus! Aut hic rem laudantium culpa voluptatibus velit temporibus corrupti a omnis?
            </p>

        </div>

    </div>
  )
}

export default About