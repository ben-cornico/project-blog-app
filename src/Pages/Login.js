import React from 'react'
import './Pages.css'
const Login = () => {
  return (
    <div className="test grid h-screen place-items-center bg-cover bg-center bg-login-bg" >
        <h1 className='text-3xl'>BLOGAG</h1>
        <form action="" className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-screen-lg min-w-screen-sm rounded shrink grid grid-cols-1 gap-6'>
            <label className="block mt-2">
                <span className="text-gray-700">Username</span>
                <input type="text" className="mt-1 block w-full rounded-md border-gray300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter Username"/>
            </label>

            <label class="block mt-2">
                <span class="text-gray-700">Password</span>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter Password" />
              </label>

            <button className='bg-gray-700 w-full rounded py-2 mt-3'>Login</button>
        </form>
    </div>

  )
}

export default Login