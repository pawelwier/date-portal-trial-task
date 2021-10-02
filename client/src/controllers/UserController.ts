import axios from 'axios'
import {SearchResults} from "../types/SearchResults";
import {UserDetails} from "../types/UserDetails";
import {SortingType} from "../types/SortingType";

export async function getAllUsers(limit: number, sorting: SortingType): Promise<SearchResults> {
  const response = await axios.get(`http://localhost:3000/api/search?length=${limit}&sorting=${sorting}`)
  return response.data
}

export async function getUserDetails(id: number): Promise<UserDetails[]> {
  const response = await axios.get(`http://localhost:3000/api/profiles?ids=${id}`)
  return response.data
}


