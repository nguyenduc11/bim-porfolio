import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div>
        <div>
            <Image src={assets.profile_img} 
            className="w-20 cursor-pointer" 
            alt="" />
            <h3 className='font-ovo text-[#111] flex items-end gap-2'>
                Hi, I'm Duc Nguyen
            </h3>
            <p>Full Stack Developer</p>
            <button className="bg-[#111] text-white px-6 py-2 rounded-md">Hire me</button>
        </div>
    </div>
  )
}

export default Header