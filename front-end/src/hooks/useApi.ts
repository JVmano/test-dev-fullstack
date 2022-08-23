import axios from "axios";
import { UpdateUserDTO, UserCreationDTO, UserLoginDTO } from "../types/User";

const api = axios.create({
  baseURL: 'https://secure-wave-58660.herokuapp.com/users',
  headers: {'Content-Type': 'application/json'}
})

export const useApi = () => ({
  signUp: async (data: UserCreationDTO) => {
    const response = await api.post('/', data)
    return response
  },

  signIn: async (userData: UserLoginDTO) => {
    const response = await api.post('/auth', userData)
    return response
  },

  logout: async () => {
    return true
  },

  readAll: async () => {
    const response = await api.get('/all')
    return response.data
  },

  update: async (data: UpdateUserDTO) => {
    const response = await api.patch('/', data)
    return response
  },

  deleteUser: async (email: string) => {
    const response = await api.delete('/', { data: { email: email } })
    return response
  }
});