import React from 'react'
import assets from '../assets/assets'
import bg1 from '../assets/plant_bg_1.jpg';


const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden  bg-(--color-hero) transition-colors duration-300'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[50px] font-medium xl:leading-23 text-text  max-w-5xl'>Plant leaf disease<span className='bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'> detection</span> from image.</h1>
      <p className='text-sm sm:text-lg font-medium text-text sm:w-250  pb-3'>Our mission is to help in identifying plant diseases efficiently. Upload an image of a plant, and our system will analyze it to detect any signs of diseases. Together, let's protect our crops and ensure a healthier harvest!</p>
      
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10 mt-10 w-full max-w-6xl'>
        <img 
          src={bg1} 
          alt="Plant" 
          className='w-100 h-60 object-cover rounded-xl shadow-lg'
        />
        <div className='text-left max-w-xl'>
          <h2 className='text-3xl sm:text-4xl font-medium mb-6 text-text'>
            How It Works
          </h2>
          <p className='mb-3 text-text'>
            <span className='bg-linear-to-r from-[#ea0bb6] to-[#4d8cea] bg-clip-text text-transparent font-semibold'>
              Upload Image:
            </span>{" "}
              Go to the Disease Recognition page and upload an image of a plant with suspected diseases.
          </p>
          <p className='mb-3 text-text'>
            <span className='bg-linear-to-r from-[#ea0bb6] to-[#4d8cea] bg-clip-text text-transparent font-semibold'>
              Analysis:
            </span>{" "}
              Our system will process the image using advanced algorithms to identify potential diseases.
            </p>
          <p className='text-text'>
            <span className='bg-linear-to-r from-[#ea0bb6] to-[#4d8cea] bg-clip-text text-transparent font-semibold'>
              Results:
            </span>{" "}
              View the results and recommendations for further action.
            </p>
        </div>
      </div>
      {/* <p className='text-sm sm:text-lg font-medium text-text  max-w-4/5 sm:max-w-lg pb-3'>Click on the Disease Recognition page in the navbar to upload an image and experience the power of our Plant Disease Recognition System!</p> */}
    </div>
  )
}

export default Hero
