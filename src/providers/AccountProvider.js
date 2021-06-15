import React, { useState } from 'react'

export const AccountContext = React.createContext()

export const AccountConsumer = AccountContext.Consumer

const AccountProvider = (props) => {
  const [userName, setUserName] = useState('katrina348')
  const [email, setEmail] = useState('katrina348@gmail.com')
  const [membershipLevel, setMembershipLevel] = useState('Gold')
  const [dateJoined, setDateJoined] = useState('08/18/2008')

  return (
    <AccountContext.Provider value={{
      userName, 
      membershipLevel,
      dateJoined,
      email,
      setUserName,
      setMembershipLevel,
      setEmail,
      setDateJoined
    }}>
      {props.children}
    </AccountContext.Provider>
  )
}

export default AccountProvider