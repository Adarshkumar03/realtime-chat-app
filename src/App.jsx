import './App.css'
import { Router, Route } from 'react-router-dom'
import Register from './routes/Register'
import Login from './routes/Login'

function App() {
  return (
    <Router>
      <Route index />
      <Route path='register' Component={<Register/>}/>
      <Route path='login' Component={<Login/>}/>
    </Router>
  )
}

export default App
