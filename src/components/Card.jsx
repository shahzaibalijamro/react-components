import React from 'react'

const Card = (props) => {
  return (
    <div className='w-64 rounded bg-white text-black'>
        <div className=''>
            <img className='w-full h-40 object-cover object-center' src={props.src} alt={props.title} />
        </div>
        <div className='p-4'>
            <div className='flex mb-1 justify-between items-center'>
                <p className='font-semibold'>Rs {props.price}</p>
                <i class="fa-regular fa-heart"></i>
            </div>
            <div className='mb-1'>
                <p className='font-medium truncate text-[15px]'>{props.title}.</p>
            </div>
            <div className='mb-1'>
                <p className='text-[14px]'>{props.address}</p>
            </div>
            <div>
                <p className='text-[14px]'>{props.time} ago</p>
            </div>
        </div>
    </div>
  )
}

export default Card