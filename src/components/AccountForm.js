import {useState, useContext} from 'react'
import {AccountContext} from '../providers/AccountProvider'
import { Form } from 'semantic-ui-react'

const AccountForm = () => {
  const account = useContext(AccountContext)
  const[userName, setUserName] = useState(account.userName)
  const[membershipLevel, setMembershipLevel] = useState(account.membershipLevel)
  const handleSubmit = (e) => {
    e.preventDefault()
    account.setUserName(userName)
    account.setMembershipLevel(membershipLevel)
    console.log(userName)
    console.log(membershipLevel)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input 
      label='User Name'
      type='text'
      value={userName}
      onChange = {(e, {value}) => setUserName(value)}
      />
      <Form.Select
      label="Membership Level"
      value={membershipLevel}
      options={membershipOptions}
      onChange = {(e, {value}) => setMembershipLevel(value)}
      />
      <Form.Button color='purple'>Save</Form.Button>
    </Form>
  )
}

const membershipOptions = [
  {key: 'g', value:'Gold', text:'Gold'},
  {key: 's', value:'Silver', text:'Silver'},
  {key: 'b', value:'Bronze', text:'Bronze'},
]

export default AccountForm