import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import './header.css'

function Header() {
  const { user1, user2, logoff, setLogoff } = useContext(UserContext)
  const { firstname, lastname, username, imgProfile } = logoff ? user1 : user2

  return (
    <header>
      <h2>
        Seja bem vindo <span>{firstname}</span>
      </h2>
      <div>
        <img src={imgProfile} alt={`Foto do perfil ${firstname} ${lastname}`} />
        <span>{username}</span>
        <button
          className="btn"
          onClick={() => setLogoff(!logoff ? true : false)}
        >
          Trocar de usuário
        </button>
      </div>
    </header>
  )
}

export default Header
