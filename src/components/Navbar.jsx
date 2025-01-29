import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { TbVideoPlus } from "react-icons/tb";
import { BsBell } from "react-icons/bs";

function Navbar() {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky text-white'>
        <div className='flex gap-8 items-center text-2xl text-white'>
            <div>
                <GiHamburgerMenu />
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <BsYoutube className='text-3xl text-red-500 '/>
                <span className='text-2xl font-semibold'>YouTube</span>
            </div>
        </div>
        <div className='flex items-center gap-5 justify-center'>
            <form action="">
                <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                    <div className='flex gap-5 items-center pr-5'>
                        <input type="text" placeholder='Search' className='text-center w-96 bg-zinc-900 focus:outline-none border-none '/>
                    </div>
                    <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                        <AiOutlineSearch className='text-xl'/>
                    </button>
                </div>
            </form>
            <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                <FaMicrophone />
            </div>
        </div>
        <div className='flex gap-8 items-center text-xl'>
            <TbVideoPlus />
            <div className='relative'>
                <BsBell />
                <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>8+</span>
            </div>
            <img src="https://imgs.search.brave.com/JumdFTenWO7nFWV6afplE4OqGS4lja83Rwl2VrZmD5o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdXRl/ZHAub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzEyL2N1/dGVfbG92ZV9kcF9p/bWFnZS0yOTgxLmpw/Zw" alt="profile picture" className='w-9 h-9 rounded-full'/>
        </div>
    </div>
  )
}

export default Navbar