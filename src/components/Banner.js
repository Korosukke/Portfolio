import React from 'react';
import Image from '../assets/avatar.svg'
import {FaGithub, FaYoutube, FaLinkedin} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';



const Banner = () => {
  return(
  <section className='section' id='home'>
    <div className='container mx-auto'>
      <div>
        <h1>Manas <span>Yadav</span></h1>
      </div>
      <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
        <span className='text-white mr-4'>I am</span>
        
        <TypeAnimation sequence={[
          'an Android Developer',2000,
          'a Web Developer',2000,
          'a Software Developer',2000
        ]}
        speed={50}
        className='text-accent'
        wrapper='span'
        repeat={Infinity}/>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Eget arcu dictum varius duis at consectetur. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
         Vestibulum lorem sed risus ultricies tristique nulla aliquet.
       </p>
      <div>
        <img src={Image}/>
      </div>
      </div>  
  </section>
  );
};

export default Banner;
