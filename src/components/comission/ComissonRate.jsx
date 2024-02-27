import React from 'react'

const ComissonRate = ({data, exchange}) => {
  return (
    <div className='flex justify-between m-1'>
      <p className='text-gray-500 m-0'>{data}</p>
      <p className='text-gray-500 m-0'>{exchange}</p>
      </div>
      
  )
}

export default ComissonRate
