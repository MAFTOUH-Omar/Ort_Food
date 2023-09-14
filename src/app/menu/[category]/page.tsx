import { pizzas } from '@/src/data';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map((item)=>(
        <Link href={`/product/${item.id}`} key={item.id} className='w-full group border-b-2 border-r-2 border-red-500 h-[60vh] sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between even:bg-fuchsia-100'  >
          {/* IMAGE CONTAINER */}
          {
            item.img && (
              <div className='relative h-[80%]'>
                <Image src={item.img} alt='' fill className='object-contain hover:rotate-12 transition-all'/>
              </div>
            )
          }
          {/* TEXT CONTAINER */}
          <div className='flex items-center font-bold justify-between'>
            <h1 className='text-2xl uppercase p-2' >{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
            <button className='hidden group-hover:block uppercase bg-red-500 text-white rounded-md p-2 '>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage;