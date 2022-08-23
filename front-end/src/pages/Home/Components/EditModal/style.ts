import styled, { css } from 'styled-components'

interface Props {
  active: boolean;
}

export const ModalContainer = styled.div<Props>`
  ${(props) =>
    props.active === true
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  align-items: center;
  background: linear-gradient(130.6deg, #5F48F5 -90.56%, #1b1b1bbf 48.62%);
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 8;
`

export const ModalCloseButtonBox = styled.div`
  border-radius: 50px;
  cursor: pointer;
  display: block;
  font-size: 24px;
  line-height: 20px;
  position: absolute;
  padding: 2px 5px;
  right: 15px;
  top: 15px;

  button {
    background: transparent;
    border: 0 solid;
    box-shadow: none;
    padding: 0;
  }

  button:hover {
    background: transparent;
    box-shadow: none;
    cursor: pointer;
  }

  button > svg {
    border-radius: 50%;
    cursor: pointer;
    height: 1.7em;
    transition: ease-in-out 0.2s;
    width: 1.7em;
  }

  button > svg:hover {
    background: rgba(172, 172, 172, 0.3);
    transition: ease-in-out 0.2s;
  }
`

export const ModalBox = styled.div`
  border-radius: 8px;
  display: flex;
  height: auto;
  justify-content: center;
  max-height: 730px;
  position: relative;
  position: relative;
  width: 800px;
  background-color: white;

  input {
    width: 500px;
  }
`

export const ButtonContainer = styled.div`
  width: 32%;
  margin: 0 auto;
  margin-bottom: 30px;
`