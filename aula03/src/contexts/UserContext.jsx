import { createContext, useState } from 'react'

const user1 = {
  id: 1,
  firstname: 'Diego',
  lastname: 'Sampaio',
  username: 'diegosmp',
  imgProfile: 'avatarMen.png',
}

const user2 = {
  id: 2,
  firstname: 'Ana',
  lastname: 'Raquel',
  username: 'raquel',
  imgProfile: 'avatarWomen.png',
}

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [logoff, setLogoff] = useState(true)
  return (
    <UserContext.Provider value={{ user1, user2, logoff, setLogoff }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
