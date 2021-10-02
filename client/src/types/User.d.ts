export interface User {
  id: number,
  name: string,
  online_status: string, // enum
  is_plus: boolean,
  picture: {
    comment: string,
    url: string,
  },
  last_login: string
}
