import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen
    bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto
        flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold
                inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                I am Solomon Chinedu, from delta. I am a graduate from university of benin, benin city.
                I studied Computer Science, right from time i have had this passion of becoming a software
                engineering. So, Immediately i got this opportunity to go into software development without wasting time.
                I am a frontend developer using technologies like  HTML, CSS, Javascript, tailwind, reactjs and version control
                like git and github. 
            </p>
            <br />
            <p className='text-xl'>
                I am not only software developer, I am into computer networking using cisco devices, wordpress developer
                hardware engineering just to mention a few.
            </p>
        </div>
    </div>
  )
}

export default About