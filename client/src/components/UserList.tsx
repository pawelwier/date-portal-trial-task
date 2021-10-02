import React, {useEffect, useState} from 'react'
import {getAllUsers} from '../controllers/UserController'
import {User} from "../types/User";

function UserList() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const userResponse = await getAllUsers()
      setUsers(userResponse.items)
    }
    getUsers()
  }, [])

  return (
    <div>
      {users.map(user => (
        <div>
          {user.name}
        </div>
      ))}
    </div>
  )
}

export default UserList
