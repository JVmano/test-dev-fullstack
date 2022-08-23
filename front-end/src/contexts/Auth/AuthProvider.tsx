import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { UpdateUserDTO, User, UserCreationDTO } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi()

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  }

  const setUsers = (users: Array<UserCreationDTO>) => {
    localStorage.setItem('users', JSON.stringify(users));
  }

  const signUp = async (data: UserCreationDTO) => {
    const response = await api.signUp(data)
    if (response.status === 201) return true
    else return false
  }

  const signIn = async (email: string, password: string) => {
    const response = await api.signIn({ email, password })
    if (response.status === 200) {
      setUser(response.data.name)
      setToken(response.data.email)
      return true
    }
    else return false
  }

  const signOut = async () => {
    setUser(null)
    setToken('')
    const response = await api.logout()
    if (response) return true
    else return false
  }

  const readAll = async () => {
    const response = await api.readAll()
    if (response[0]?.email) return response
    else return []
  }

  const update = async (data: UpdateUserDTO) => {
    const response = await api.update(data)
    if (response.status === 200) return true
    else return false
  }

  const deleteUser = async (email: string) => {
    const response = await api.deleteUser(email)
    if (response.status === 200) return true
    else return false
  }

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, readAll, update, deleteUser, setUsers }}>
      {children}
    </AuthContext.Provider>
  )
}