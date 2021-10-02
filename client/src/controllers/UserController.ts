import axios from 'axios'
import {SearchResults} from "../types/SearchResults";

export async function getAllUsers(): Promise<SearchResults> {
  const response = await axios.get('http://localhost:3000/api/search?length=20')
  return response.data
}
