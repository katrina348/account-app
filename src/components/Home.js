import {useContext} from 'react'
import {AccountContext} from '../providers/AccountProvider'
import {UsersContext} from '../providers/UsersProvider'

const Home = () => {
  const {email, userName, membershipLevel} = useContext(AccountContext)
  const {users} = useContext(UsersContext)
  return (
    <div>
      <h1>home</h1>
      <p>userName: {userName}</p>
      <p>email: {email}</p>
      <p>membershipLevel: {membershipLevel}</p>
      {users.map( u => <p>{u}</p>)}
    </div>
  )
}

export default Home