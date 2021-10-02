export interface User {
  id: number,
  name: string,
  online_status: OnlineStatus
  is_plus: boolean,
  picture: {
    comment: string,
    url: string,
  },
  last_login: string
}

type OnlineStatus = 'ONLINE' | 'OFFLINE' | 'DATE'
