import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { GrFormClose } from 'react-icons/gr'
import { toast } from "react-toastify"
import Button from "../../../../Components/Button"
import Input from "../../../../Components/Input"
import { AuthContext } from "../../../../contexts/Auth/AuthContext"
import { UpdateUserDTO } from "../../../../types/User"

import { ModalCloseButtonBox, ModalContainer, ModalBox, ButtonContainer } from "./style"

type StoredUsers = {
  id: string,
  name: string,
  email: string,
  password: string,
  fathersName: string,
  mothersName: string
}

type UserModalDTO = {
  user: string
  status: boolean
  callbackStatus: Dispatch<SetStateAction<boolean>>
  callbackModal: () => void
}

export default function EditModal(props: UserModalDTO): JSX.Element {
  const auth = useContext(AuthContext)
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mothersName, setMothersName] = useState('')
  const [fathersName, setFathersName] = useState('')
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

  const handleActiveModal = () => {
    props.callbackStatus(false)
    props.callbackModal()
  }

  const handleUpdateUser = async (data: UpdateUserDTO) => {
    if (!email) return toast.error('Invalid email')
    if (!password) return toast.error('Invalid password')
    if (!name) return toast.error('Invalid name')
    if (password.length < 8) return toast.error('Use a password with at least 8 characters')
    if (name.length > 36) return toast.error('Use a name with less than 36 characters')

    try {
      setLoading(true)
      const response = await auth.update(data)
      if (response) {
        toast.success('User updated!')
        handleActiveModal()
      }
      setLoading(false)
      window.location.reload()
    } catch (error) {
      setLoading(false)
      return toast.error('Invalid user. Please verify the login information')
    }
  }

  useEffect(() => {
    const tempStorageUsers = localStorage.getItem('users')
    if (tempStorageUsers) {
      const storageUsers: Array<StoredUsers> = JSON.parse(tempStorageUsers)
      const user = storageUsers.filter((data) => data.email === props.user)[0]
      
      setName(user.name)
      setEmail(user.email)
      setPassword(user.password)
      setMothersName(user.mothersName)
      setFathersName(user.fathersName)
    }
  }, [props.user])

  return (
    <ModalContainer active={props.status}>
      <ModalBox>
        <ModalCloseButtonBox onClick={handleActiveModal}>
          <button>
            <GrFormClose />
          </button>
        </ModalCloseButtonBox>
        <div>
          <h2>User Edit</h2>
          <label>
            Name
            <Input
              name='name'
              onChange={handleOnChange}
              value={name}
              placeholder={'Full name'}
              type={'text'}
            />
          </label>
          <label>
            Email
            <Input
              name='email'
              onChange={handleOnChange}
              value={email}
              placeholder={'Email'}
              type={'email'}
            />
          </label>
          <label>
            Password
            <Input
              name='password'
              onChange={handleOnChange}
              value={password}
              placeholder={'Password'}
              type={'password'}
            />
          </label>
          <label>
            Mother's Name
            <Input
              name='mothersName'
              onChange={handleOnChange}
              value={mothersName}
              placeholder={"Mother's name"}
              type={'text'}
            />
          </label>
          <label>
            Father's Name
            <Input
              name='fathersName'
              onChange={handleOnChange}
              value={fathersName}
              placeholder={"Father's Name"}
              type={'text'}
            />
          </label>

          <ButtonContainer>
            <Button
              type={'button'}
              name={loading ? "..." : "Save"}
              onClick={() => {handleUpdateUser({ name, email, password, mothersName, fathersName })}}
            />
          </ButtonContainer>
        </div>
      </ModalBox>
    </ModalContainer>
  )
}