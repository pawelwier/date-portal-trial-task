import React, {useEffect, useState} from 'react'
import {getAllUsers} from '../controllers/UserController'
import {User} from "../types/User";
import UserCard from "./UserCard";
import {SortingType} from "../types/SortingType";

type UserListProps = {
  sortingType: SortingType
}

const PAGE_LIMIT = 20

function UserList({sortingType}: UserListProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [limit, setLimit] = useState<number>(PAGE_LIMIT);
  const [recordCount, setRecordCount] = useState<number>(0);

  useEffect(() => {
    const getUsers = async () => {
      const userResponse = await getAllUsers(limit, sortingType)
      setUsers(userResponse.items)
      setRecordCount(userResponse.total)
    }
    getUsers()
  }, [limit, sortingType])

  return (
    <>
      <div className="result-count">{recordCount} results found</div>
      <div className="user-list">
        {users.map((user, i) => (
          <UserCard {...user} key={i} />
        ))}
      </div>
    </>
  )
}

export default UserList
