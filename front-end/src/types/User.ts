export type User = {
  email: string
  password: string
}

export type UserCreationDTO = {
	name: string,
	email: string,
	password: string,
	fathersName: string,
	mothersName: string
}

export type UserLoginDTO = {
  email: string,
	password: string,
}

export type UpdateUserDTO = {
  email: string,
  name?: string,
  password?: string,
	fathersName?: string,
	mothersName?: string
}