import React from 'react'
import TrancsCard from '../../components/TransCard/TrancsCard'
import Search from '../../components/SearchBar/Search'


const Wallet = () => {
  return (
    <div className=' p-3 w-100 row m-0 overflow-auto dashboardStyle'>
    <div className='flex  justify-between items-center'>
    <input type="text" placeholder="Search....." className="form-control SearchStyle border-0 text-light w-50 mt-2 ms-4 "/>
    <button className='me-4 bg-blue-500 h-10 p-2 rounded-2 text-sm'>Connect Wallet</button>
    </div>
    <br/>
    
    <div className='m-6'>
    <br/>
    <TrancsCard/>
    </div>
    </div>
  )
}

export default Wallet
