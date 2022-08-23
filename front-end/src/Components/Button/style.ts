import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 0px;

  button {
    min-width: 10.1rem;
    margin: 30px 0 0;
    padding: 10px 50px;
    border: 6px solid;
    border-image-slice: 1;
    border-width: 3px;
    font-size: 18px;
    color: #000;
    background: transparent;
    transition: ease-in-out 0.4s;
    cursor: pointer;
    border-image-source: linear-gradient(
      96.92deg,
      #FF70AF 34.38%,
      rgba(53, 97, 255, 0) 100%
    );
    transition: ease-in-out 0.4s;
  }

  button:hover {
    border-image-source: linear-gradient(
      96.92deg,
      #FF70AF 34.38%,
      #5F48F5 100%
    );
    transition: ease-in-out 0.4s;
  }
`
