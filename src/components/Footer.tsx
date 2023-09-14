import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-10 text-red-500 flex items-center justify-between mt-3'>
    <Link href="/" className='font-bold text-xl'>
        ORT <span className="bg-red-500 text-white p-1 rounded-md">food</span>
    </Link>
    <p>
        &copy; {new Date().getFullYear()} MAFTOUH Omar. All Rights Reserved.
    </p>
    </div>
  )
}

export default Footer