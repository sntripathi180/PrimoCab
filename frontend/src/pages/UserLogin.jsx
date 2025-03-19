import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [userData,setUserData] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    
    setUserData({
      email,
      password
    })
    console.log(userData)
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-16 mb-10' src='/logo.png' alt='logo' />
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h3 className='text-lg font-medium mb-2'>
          What's your email?
        </h3>
        <input 
          required
          className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full rounded text-lg placeholder:text-base'
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email@example.com'
         />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
          required 
          className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full rounded text-lg placeholder:text-base'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password' 
          />
        <button type='submit' className='bg-[#111] text-white text-center font-semibold mb-2 px-4 py-2  w-full rounded text-lg block'>Login</button>
       <p>Don't have an account?
          <Link to='/signup' className='text-blue-600 underline'> Register</Link>
       </p>
      </form>
      </div>
      <div>
        <Link 
        to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibols mb-7 px-4 py-2  w-full rounded text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin