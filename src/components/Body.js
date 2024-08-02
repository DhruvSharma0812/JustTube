import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (
    <div className=''>
        <Header />
        <div className='flex'>
          <Sidebar />
          <div className='w-[100%]'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Body
