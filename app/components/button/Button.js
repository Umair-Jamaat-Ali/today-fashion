import React from 'react'

export default function Button({title}) {
  return (
    <div className='w-[120px] h-[40px] bg-amber-500 pt-2 pl-4 rounded-xl hover:bg-amber-900 hover:scale-x-105 hover:scale-y-105 cursor-pointer'>
        <button>{title}</button> 
        </div>
  )
}
