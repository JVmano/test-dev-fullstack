import styled from 'styled-components'

export const Container = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  margin: 12px 0 0;

  input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    background: linear-gradient(
      99.68deg,
      #3562ff -2440.39%,
      rgba(53, 98, 255, 0) 56.66%
    );
    border: 1px solid #9b9b9b;
    font-size: 16px;
    color: #000;
    outline: none;
    transition: ease-in-out 0.4s;

    &::placeholder {
      color: #9b9b9b;
      font-size: 16px;
    }
  }

  input:focus {
    outline: 0;
    border: 1px solid #5F48F5;
  }

  svg {
    color: #fff;
    margin-left: 10px;
    background: #3561ff;
    padding: 0.3rem 0.5rem;
    border-radius: 8px;
  }
`
