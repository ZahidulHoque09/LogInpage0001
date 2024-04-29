import React from 'react'

const Input = () => {
  return (
    <>
    <div className='my-10'>
  
  <label htmlFor='email' className='font-semibold text-[12px]
             text-DarkBlue opacity-50'>Email Address
  </label>
  
            <input type='text' placeholder='Ladushing691@gmail.com'
            id='email'
            name='email'
            autoComplete='off'
            className='w-full py-[22px]
            rounded-lg px-5 border-2 border-blue-200'/>
  
            
  </div>
      
    </>
  )
}

export default Input
