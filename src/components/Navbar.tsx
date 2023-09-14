import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Link from 'next/link'
const Navbar = () => {
    const user = false ;
  return (
    <div className='h-12 text-red-500 p-4 lg:px-20 xl:px-40 flex justify-center items-center border-b-2 border-b-red-500 uppercase md:h-24'>
        {/* Left links */}
        <div className='hidden md:flex gap-4 flex-1'>
            <Link href="/">Home Page</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
        {/* LOGO */}
        <div className='text-xl md:font-bold flex-1 md:text-center'>
            <Link href="/">
                ORT <span className="bg-red-500 text-white p-1 rounded-md">food</span>
            </Link>
        </div>
        {/* MOBILE MENU */}
        <div className='md:hidden'>
            <Menu/>
        </div>
        {/* Right links */}
        <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
            <div className='flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:absolute top-2 r-2 lg:static '>
                <img src='/phone.png' alt='' width={20} height={20}/>
                <span>0604534791</span>
            </div>
        {!user
            ?   (<Link href="/login">Login</Link>)
            :   (<Link href="/menu">Orders</Link>)
        }
        <CartIcon/>
        </div>
    </div>
  )
}

export default Navbar