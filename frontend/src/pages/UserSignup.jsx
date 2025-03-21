import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [userData,setUserData] = useState({})
  const navigate = useNavigate()

  const {user,setUser} = React.useContext(UserDataContext)

  const submitData =async (e) => {
    e.preventDefault()
    const newUser = {
      fullname:{
        firstname : firstName,
        lastname : lastName
      },
      email,
      password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div>
       <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-16 mb-10' src='/logo.png' alt='logo' />
      <form onSubmit={(e)=>submitData(e)}>
      <h3 className='text-lg font-medium mb-2'>
          What's your name?
        </h3>
        <div className='flex gap-4 mb-5'>
        <input 
          required
          className='bg-[#eeeeee]  px-4 py-2 border w-1/2 rounded text-lg placeholder:text-base'
          type="text" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='First name'
         />
         <input 
          required
          className='bg-[#eeeeee]  px-4 py-2 border w-1/2 rounded text-lg placeholder:text-base'
          type="text" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Last name'
         />
        </div>
        <h3 className='text-lg font-medium mb-2'>
          What's your email?
        </h3>
        <input 
          required
          className='bg-[#eeeeee] mb-5 px-4 py-2 border w-full rounded text-lg placeholder:text-base'
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
        <button type='submit' className='bg-[#111] text-white text-center font-semibold mb-2 px-4 py-2  w-full rounded text-lg block'>Create Account</button>
       <p>Already have an account?
          <Link to='/login' className='text-blue-600 underline'> Login</Link>
       </p>
      </form>
      </div>
      <div>
        <p className='leading-tight text-sm text-gray-500'>
          By signing up, you agree to our Terms of Use and Privacy Policy.
        </p>
      </div>
    </div>
    </div>
  )
}

export default UserSignup