import React, { createContext } from 'react'
import { useState } from 'react'

export const UserDataProvider = createContext()
const UserContext = ({children}) => {
    const [userData,setUserData] = useState({
        email:'',
        fullName:{
            firstname:'',
            lastname:''
        }
        
    })

  return (
    <div>
        <UserDataProvider.Provider value = {[userData,setUserData]}>
            {children}
        </UserDataProvider.Provider>
    </div>
  )
}

export default UserContext