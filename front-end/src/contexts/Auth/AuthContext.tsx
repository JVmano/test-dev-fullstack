import { createContext } from 'react';
import { UpdateUserDTO, User, UserCreationDTO } from '../../types/User';

export type AuthContextType = {
  user: User | null
  signUp: (data: UserCreationDTO) => Promise<boolean>
  signIn: (email: string, password: string) => Promise<boolean>
  signOut: () => Promise<boolean>
  readAll: () => Promise<[]>
  setUsers: (users: Array<UserCreationDTO>) => void
  update: (data: UpdateUserDTO) => Promise<boolean>
  deleteUser: (email: string) => Promise<boolean>
}

export const AuthContext = createContext<AuthContextType>(null!);