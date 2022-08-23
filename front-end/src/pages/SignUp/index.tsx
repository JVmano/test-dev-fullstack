import { SetStateAction, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Button from "../../Components/Button"
import Input from "../../Components/Input"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ButtonContainer, Container } from "./style"

export default function SignUp() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mothersName, setMothersName] = useState('')
  const [fathersName, setFathersName] = useState('')
  const [step, setStep] = useState('firstStep')
  const [loading, setLoading] = useState(false)
  
  const handleOnChange = (event: { target: { name: any; value: SetStateAction<string>; }; }) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value)
        break;
      case 'email':
        setEmail(event.target.value)
        break;
      case 'password':
        setPassword(event.target.value)
        break;
      case 'mothersName':
        setMothersName(event.target.value)
        break;
      case 'fathersName':
        setFathersName(event.target.value)
        break;
      default:
        break;
    }
  }

  const handleNextStep = () => {
    if (!name) return toast.error('Invalid name')
    if (!email) return toast.error('Invalid email')
    if (!password) return toast.error('Invalid password')
    if (password.length < 8) return toast.error('Use a password with at least 8 characters')
    setStep('secondStep')
  }

  const handleGoBack = () => {
    switch (step) {
      case 'firstStep':
        navigate('/')
        break;
      case 'secondStep':
        setStep('firstStep')
        break;
      default:
        break;
    }
  }

  const handleSignUp = async () => {
    try {
      setLoading(true)
      const creation = await auth.signUp({ name, email, password, mothersName, fathersName })
      setLoading(false)

      if (creation) {
        toast.success('Account created!')
        navigate('/')
      }
    } catch (error) {
      setLoading(false)
      return toast.error("Wasn't possible to create a account. Please try again later")
    }
  }

  return (
    <>
      <Container>
        <h2>Sign Up</h2>
        {step === 'firstStep' && (
          <>
            <Input
              name='name'
              onChange={handleOnChange}
              value={name}
              placeholder={'Full name'}
              type={'text'}
            />
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
          </>
        )}

        {step === 'secondStep' && (
          <>
            <Input
              name='mothersName'
              onChange={handleOnChange}
              value={mothersName}
              placeholder={"Mother's name"}
              type={'text'}
            />
            <Input
              name='fathersName'
              onChange={handleOnChange}
              value={fathersName}
              placeholder={"Father's Name"}
              type={'text'}
            />
          </>
        )}
        
        <ButtonContainer>
          <Button
            type={'button'}
            name={loading ? "..." : step === 'firstStep' ? "Next" : "Create"}
            onClick={step === 'firstStep' ? () => {handleNextStep()} : () => {handleSignUp()}}
          />
          <Button
            type={'button'}
            name={step === 'firstStep' ? "Cancel" : "Previous"}
            onClick={() => {handleGoBack()}}
          />
        </ButtonContainer>
      </Container>
    </>
  )
}