import { useContext } from 'react'
import './profile.css'
import { UserContext } from '../../contexts/UserContext'

function Profile() {
  const { user1, logoff, user2 } = useContext(UserContext)
  const { firstname, lastname, username, imgProfile } = logoff ? user1 : user2
  return (
    <section className="container">
      <img src={imgProfile} alt={`Foto de perfil do ${firstname}`} />
      <div className="container-info">
        <span>Primeiro nome</span>
        <h2>{firstname}</h2>
      </div>
      <div className="container-info">
        <span>Último nome</span>
        <h2>{lastname}</h2>
      </div>
      <div className="container-info">
        <span>Nome de usuário</span>
        <h2>{username}</h2>
      </div>
    </section>
  )
}

export default Profile
