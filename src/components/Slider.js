import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className=" z-50 md:hidden flex gap-y-4 flex-col bg-customGold font-bold text-custom w-40 absolute uppercase top-10 right-0 transition-opacity ease-in  p-5 h-[350px] gap-x-10">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/reservation">Reservation</Link> */}
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
    // <div className=" z-50 md:hidden flex gap-y-4 flex-col bg-customGold font-bold text-custom w-40 absolute uppercase top-10 right-0 transition-opacity ease-in  p-5 h-[350px] gap-x-10">
    //   <a href="/">Home</a>
    //   <a href="/about">About</a>
    //   {/* <a href="/reservation">Reservation</a> */}
    //   <a href="/gallery">Gallery</a>
    //   <a href="/contact">Contact Us</a>
    // </div>
  );
};

export default Slider;
