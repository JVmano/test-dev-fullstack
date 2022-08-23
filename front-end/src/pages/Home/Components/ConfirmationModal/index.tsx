import { Dispatch, SetStateAction, useState } from "react"

import { GrFormClose } from 'react-icons/gr'
import Button from "../../../../Components/Button"
import Input from "../../../../Components/Input"

import {
  ModalContainer,
  ModalBox,
  ModalBoxBack,
  ModalCloseButtonBox,
  ModalContentContainer,
  ModalOptionButtonsBox,
  InputModal,
} from './style'

type UserDeleteConfirmationData = {
  onClickConfirm: () => void
  onClickDenied: () => void
  message: string
  textButtonConfirm: string
  textButtonDenied: string
  status: boolean
  callbackStatus: Dispatch<SetStateAction<boolean>>
  callbackModal: () => void
  haveInput: boolean
  placeholderInput: string
}

export default function ConfirmationModal(data: UserDeleteConfirmationData) {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleOnChange = (event: { target: { name: any; value: SetStateAction<string> } }) => {
    switch (event.target.name) {
      case 'inputParam':
        setInput(event.target.value)
        break
      default:
        break
    }
  }

  const handleActiveModal = () => {
    data.callbackStatus(false)
    data.callbackModal()
  }

  const handleOnClickConfirm = async (callback: (arg0: string | undefined) => any) => {
    setLoading(true)
    if (data.haveInput) {
      await callback(input)
    } else {
      await callback('')
    }

    window.location.reload()
    handleActiveModal()
    setLoading(false)
  }

  const handleOnClickDenied = async (callback: () => any) => {
    await callback()
    handleActiveModal()
  }

  return (
    <ModalContainer active={data.status}>
      <ModalBox>
        <ModalBoxBack>
          <ModalCloseButtonBox onClick={() => handleActiveModal()}>
            <button>
              <GrFormClose />
            </button>
          </ModalCloseButtonBox>
          <div>
            <ModalContentContainer>
              <div>
                <h2>{data.message}</h2>
                {data.haveInput === true && (
                  <InputModal>
                    <Input
                      name='inputParam'
                      placeholder={data.placeholderInput}
                      type='text'
                      onChange={handleOnChange}
                      value={input}
                    />
                  </InputModal>
                )}
              </div>
              <ModalOptionButtonsBox>
                <Button
                  name={loading ? '...' : data.textButtonConfirm}
                  onClick={() => handleOnClickConfirm(data.onClickConfirm)}
                  type={'button'}
                  />
                <Button
                  name={loading ? '...' : data.textButtonDenied}
                  onClick={() => handleOnClickDenied(data.onClickDenied)}
                  type={'button'}
                />
              </ModalOptionButtonsBox>
            </ModalContentContainer>
          </div>
        </ModalBoxBack>
      </ModalBox>
    </ModalContainer>
  )
}
