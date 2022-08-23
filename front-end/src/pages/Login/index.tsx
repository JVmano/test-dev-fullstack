import { ButtonContainer, Container } from "./style"
import Input from "../../Components/Input"
import { SetStateAction, useContext, useState } from "react";
import Button from "../../Components/Button";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleOnChange = (event: { target: { name: any; value: SetStateAction<string>; }; }) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value)
        break;
      case 'password':
        setPassword(event.target.value)
        break;
      default:
        break;
    }
  }

  const handleLoginAuth = async () => {
    if (!email) return toast.error('Invalid email')
    if (!password) return toast.error('Invalid password')

    try {
      setLoading(true)
      await auth.signIn(email, password)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      return toast.error('Invalid user. Please verify the login information')
    }
  }

  return (
    <>
      <Container>
        <h2>Login</h2>
        <Input
          name='email'
          onChange={handleOnChange}
          value={email}
          placeholder={'Email'}
          type={'email'}
        />
        <Input
          name='password'
          onChange={handleOnChange}
          value={password}
          placeholder={'Password'}
          type={'password'}
        />
        <ButtonContainer>
          <Button
            type={'button'}
            name={loading ? "..." : "Sign In"}
            onClick={() => handleLoginAuth()}
          />
          <Button
            type={'button'}
            name={loading ? "..." : "Sign Up"}
            onClick={() => { navigate('/signup') }}
          />
        </ButtonContainer>
      </Container>
    </>
  )
}