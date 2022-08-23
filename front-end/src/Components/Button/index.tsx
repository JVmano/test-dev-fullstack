import { Container } from './style'

type GlobalButtonType = {
  type: "button" | "submit" | "reset" | undefined
  name: string
  onClick: () => void
}

export default function Button(data: GlobalButtonType) {
  return (
    <Container>
      <button type={data.type} onClick={data.onClick}>
        {data.name}
      </button>
    </Container>
  )
}
