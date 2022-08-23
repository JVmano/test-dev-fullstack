import { Container } from './style'

type GlobalInputProps = {
  name: string
  type: "email" | "password" | "text" | "number" | undefined
  maxLength?: number
  placeholder?: string
  onChange: any
  value: string
}

export default function Input(data: GlobalInputProps): JSX.Element {
  return (
    <Container>
      <input
        name={data.name}
        type={data.type}
        maxLength={data.maxLength}
        placeholder={data.placeholder}
        onChange={data.onChange}
        value={data.value}
      />
    </Container>
  )
}
