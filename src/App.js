import React from 'react'
import sample from './images/image1.jpg'
import sample2 from  './images/image2.jpg'
import sample3 from './images/image3.jpg'
import sample4 from './images/image4.jpg'
import sample5 from './images/image5.jpg'
import sample6 from './images/image6.jpg'
import sample7 from './images/image7.jpg'

import './App.css'
import robotlogo from './robot-logo.png';
import CountdownTimer from './CountdownTimer'
import Marquee from "react-fast-marquee";

function App() {
  const images = [
    { src: sample},
    { src: sample2},
    { src: sample3},
    { src: sample4},
    { src: sample5},
    { src: sample6},
    { src: sample7},

  ]  
  

  const targetDate = new Date('Jun 18, 2024 23:59:59');

  return (
    <div className='bg-black overflow-hidden '>
      
      <div className="tild-screen h-screen mx-auto my-0 block main-content relative right-28	">
        <Marquee speed={120} loop={0} className="absolute mt-4 inset-x-0 top-0 h-669">
          {images.map((src, index) => (
            <img className=" image-width mr-6 h-669	" key={index} src={src.src} alt={`Image ${index}`} />
          ))}
        </Marquee>
        
        <Marquee direction='right' speed={120} loop={0} className="absolute mt-4 inset-x-0 top-0 h-669">
          {images.map((src, index) => (
            <img className=" image-width mr-6 h-669	" key={index} src={src.src} alt={`Image ${index}`} />
          ))}
        </Marquee>
        <Marquee speed={120} loop={0} className="absolute mt-4 inset-x-0 top-0 h-669">
          {images.map((src, index) => (
            <img className=" image-width mr-6 h-669	" key={index} src={src.src} alt={`Image ${index}`} />
          ))}
        </Marquee>
      </div>

      <div className="ml-16	max-[480px]:ml-5 h-full right-0 left-0 mx-auto my-0  uppercase text-white">
        <div className='absolute bottom-0 '>
          <div className='w-44 mb-10	h-16	'>
            <img src=''></img>
          </div>
          <h1 className='text-6xl max-[480px]:text-3xl max-[480px]:leading-10	 mb-10	w-7/12 max-[480px]:w-10/12	font-bold'>
            Some Samples 
          </h1>
          <div className="Submit-Button mb-8">
            <button className="max-[480px]:text-base text-2xl	">Sign up</button>
          </div>
          <p className='mb-10 text-xl	capitalize max-[480px]:text-base max-[480px]:w-64	'>
            Some content
          </p>
          <h1 className='text-5xl mb-24	 font-bold'>
          <CountdownTimer targetDate={targetDate} />
          </h1>
        </div>
      </div>
    </div>

  )
}

export default App
