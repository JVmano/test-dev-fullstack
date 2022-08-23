import { useContext } from 'react';
import { Routes ,Route } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';

import Home from '../pages/Home';
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const Indexes = () => {
  useContext(AuthContext)
  const logged = localStorage.getItem('authToken')
  const authenticated = logged ? <Home /> : <Login />

  return (
    <Routes>
      <Route path='/' element={authenticated} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default Indexes
