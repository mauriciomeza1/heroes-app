import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../../auth/authContext'
import { types } from '../../types/types'

export const Login = () => {

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = () => {
    
    const action = {
      type: types.login,
      payload: {name: 'Mauricio'}
    }
    
    navigate('/', {
      replace: true
    })

    dispatch(action) 

  }

  return (
    <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button 
        onClick={handleLogin}
        className="btn btn-primary"
        >Login</button>
    </div>
  )
}
