import React, {useEffect, useState} from 'react'
import {getAllUsers} from '../controllers/UserController'
import {User} from "../types/User";
import UserCard from "./UserCard";
import {SortingType} from "../types/SortingType";

type UserListProps = {
  sortingType: SortingType,
  resultLimit: number,
}

function UserList({sortingType, resultLimit}: UserListProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [recordCount, setRecordCount] = useState<number>(0);

  useEffect(() => {
    const getUsers = async () => {
      const userResponse = await getAllUsers(resultLimit, sortingType)
      setUsers(userResponse.items)
      setRecordCount(userResponse.total)
    }
    getUsers()
  }, [resultLimit, sortingType])

  return (
    <>
      <div className="header">{recordCount} results found</div>
      <div className="user-list">
        {users.map((user, i) => (
          <UserCard {...user} key={i} />
        ))}
      </div>
    </>
  )
}

export default UserList
