
import './App.css'
import UserContextProvider from './assets/context/UserContextProvider'
import Login from './component/Login'
import Pro from './component/Pro'



function App() {

  return (
    <UserContextProvider>
      <h1>React userContext provider</h1>
      <Login />
      <Pro />
    </UserContextProvider>
  )
}

export default App
