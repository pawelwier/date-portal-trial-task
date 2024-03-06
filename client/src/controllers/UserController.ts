import axios from 'axios'
import { SearchResults } from '../types/SearchResults'
import { UserDetails } from '../types/UserDetails'
import { SortingType } from '../types/SortingType'
require('dotenv').config()

export async function getAllUsers(
  limit: number,
  sorting: SortingType
): Promise<SearchResults> {
  const response = await axios.get(
    `${process.env.REACT_APP_HOST_URL}/search?length=${limit}&sorting=${sorting}`
  )
  return response.data
}

export async function getUserDetails(id: number): Promise<UserDetails[]> {
  const response = await axios.get(
    `${process.env.REACT_APP_HOST_URL}/profiles?ids=${id}`
  )
  return response.data
}
