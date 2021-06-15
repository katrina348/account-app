import { Card } from "semantic-ui-react"
import {useContext} from 'react'
import {AccountContext} from '../providers/AccountProvider'

const Account = () => {
  const {userName, dateJoined, membershipLevel} = useContext(AccountContext)
  return (
    <Card>
      <Card.Content>
        <Card.Header>{userName}</Card.Header>
        <Card.Meta>Date Joined: {dateJoined}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership Level: {membershipLevel}</p>
      </Card.Content>
    </Card>
  )
}
export default Account