import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15.25rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 36rem;

  h2 {
    font-size: 1.50rem;
    line-height: 1.75rem;
    text-align: center;
  }

  input {
    height: 2rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
    margin-bottom: 1rem;
  }

  & > button:last-child {
    margin-top: 0;
  }
`

export const ButtonContainer = styled.div`
  display: flex;

  & > div:first-child {
    margin-right: 15.2rem;
  }
`