import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <header>
            <a className='btn btn-primary' href='/users'>Users</a> &nbsp;
            <a className='btn btn-primary' href='/user-add'>User Add</a>
            {/* <a href='/user-edit'>User Edit</a> */}
        </header>

        <Outlet />
    </>
  )
}
