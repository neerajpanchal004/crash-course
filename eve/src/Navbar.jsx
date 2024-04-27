import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-gray-600 p-5 justify-around text-white'>
        <h1 className='text-3xl'>Product listing page</h1>
        <input type='text' placeholder='search product'/>
    </div>
  )
}

export default Navbar