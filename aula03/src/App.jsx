import Header from './components/Header'
import Profile from './components/Profile'
import UserProvider from './contexts/UserContext'

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Profile />
      </div>
    </UserProvider>
  )
}

export default App
