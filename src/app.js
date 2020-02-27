import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx'
import { EnhancedReducer, home, login, signup } from './reducer'

const App = () => {
  const [{ page }, dispatch] = EnhancedReducer({ enableMiddleware: true })
  return (
    <>
      <ul>
        <li onClick={() => dispatch(home)}>Home</li>
        <li onClick={() => dispatch(login)}>Login</li>
        <li onClick={() => dispatch(signup)}>Signup</li>
      </ul>
      {page.cata({
        Home: () => <Home />,
        Login: () => <Login />,
        Signup: () => <Signup />
      })}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
