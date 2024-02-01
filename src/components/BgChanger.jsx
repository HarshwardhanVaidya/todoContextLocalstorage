import React from 'react'
import { useState } from 'react';
import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

const BgChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('bg-white');
  // const [textColor, setTextColor] = useState('text-black');
  
  const changeBgColor = () => {
    if (backgroundColor == 'bg-white'&& 'text-black') {
      const color = `bg-black`;
      setBackgroundColor(color);
      document.body.classList.add(color);
      document.body.classList.remove(backgroundColor);

      const text = 'text-white';
      setBackgroundColor(text);
      document.body.classList.add(text);
      document.body.classList.remove(backgroundColor);
    }else {
     setBackgroundColor('bg-white')
     document.body.classList.add('bg-white');
     document.body.classList.remove(backgroundColor);
    }
  }

  return (
    <div>
      <button className=' px-2 py-2 rounded-full shadow-sm shadow-slate-500' onClick={changeBgColor}> {backgroundColor == 'bg-white'?  <IoIosMoon className='text-2xl  hover:text-blue-600 text-gray-900' />:<IoSunny className='text-2xl hover:text-yellow-500 text-white'/> }</button>
    </div>
  )
}

export default BgChanger