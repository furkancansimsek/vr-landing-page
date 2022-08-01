import React from 'react';
import background from '../assets/bg.png'

const Banner = () => {
  return (
    <>
        <div className="w-full overflow-hidden" style={{backgroundImage: `url(${background})`,backgroundPosition: 'center', backgroundSize: 'cover', minHeight: '100vh'}}>
            <div className="container mx-auto flex items-center h-screen pt-[12rem]">
                <div className="grid md:grid-cols-2 w-full h-full">
                    <div className="flex flex-col text-white justify-end md:justify-center items-start w-full p-5 md:p-0 h-full">
                        <h2 className='font-[700] text-[1.5rem]'>NEW RELEASE</h2>
                        <h1 className='font-[900] text-[3rem] md:text-[4vw]'>VIRTUAL <br /> REALITY <br /> EXPERIENCE</h1>
                        <a className='mt-10 font-[700] md:text-[2rem] hover:text-[#CD0078] duration-300' href="#">BUY NOW<i class="fa-solid fa-arrow-right ml-5 text-4xl"></i></a>
                    </div>
                    <div className="flex flex-col text-white md:text-right justify-start md:justify-center md:items-end w-full p-5 md:p-0">
                        <h2 className='font-[700] text-[2rem]'>DISCOUNT UP TO 50% OFF</h2>
                        <h1 className='font-[400] text-[1rem] block w-[50%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, nesciunt.</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner