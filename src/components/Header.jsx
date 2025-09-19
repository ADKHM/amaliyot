import React from 'react'

const Header = () => {
  return (
    <header className='pt-11 px-20'>
        <div className='flex justify-between items-center'>
            <nav className='flex gap-12'>
                <a href="#" className='font-normal text-base '>Home</a>
                <a href="#" className='font-normal text-base '>Shop All</a>
                <a href="#" className='font-normal text-base '>Blog</a>
            </nav>
            <img src="/image.png" alt="logo" className='w-[200px] h-16' />
            <div className='flex gap-4 items-center'>
                <p className='font-normal text-base text-[#D62828]'>About us</p>
                <input type="text" name="" id="" placeholder='Search product' className='px-4 py-2 w-[200px] h-38px] rounded-2xl bg-[#EDF2F4]' />
            </div>
        </div>
    </header>
  )
}

export default Header