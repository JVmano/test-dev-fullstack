import { toast } from "react-toastify"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Button from "../../Components/Button"
import { useContext, useEffect, useRef, useState } from "react";
import { ButtonContainer, Container, PageBody, ResponsiveTable, TableBody, TableBodyCell, TableBodyRow, TableHeader, TableHeaderCell } from "./style";

import { FaPen } from 'react-icons/fa'
import { RiDeleteBin2Line } from 'react-icons/ri'
import EditModal from "./Components/EditModal";
import ConfirmationModal from "./Components/ConfirmationModal";

type StoredUsers = {
  id: string,
  name: string,
  email: string,
  password: string,
  fathersName: string,
  mothersName: string
}

export default function Home() {
  const api = useContext(AuthContext);
  const [users, setUsers] = useState([])
  const [edit, setEdit] = useState('')

  const modal = useRef('')
  const [status, setStatus] = useState(false)

  const clearModal = () => {
    modal.current = ' '
  }

  const setModal = (name: string) => {
    modal.current = name
  }

  const handleActiveModal = (modal: string, user: string) => {
    if (user && modal === 'EditUser') setEdit(user)
    if (user && modal === 'Confirmation') setEdit(user)

    setModal(modal)
    setStatus(true)
  }

  const handleClickDenied = () => {
    handleActiveModal('', '')
  }

  const handleDeleteUser = async () => {
    const response = await api.deleteUser(edit)
    if (response) toast.success('User successfully deleted')
    else toast.error('Error in user deletion. Try again later')
  }

  const OpenModals = () => (
    <>
      {modal.current === 'EditUser' && (
        <EditModal
          user={edit}
          status={status}
          callbackStatus={setStatus}
          callbackModal={clearModal}
        />
      )}
      {modal.current === 'Confirmation' && users.length > 0 && (
        <ConfirmationModal
          onClickConfirm={() => handleDeleteUser()}
          onClickDenied={() => handleClickDenied()}
          message='Are you sure you want to delete this user?'
          textButtonConfirm={'YES'}
          textButtonDenied={'CANCEL'}
          status={status}
          callbackStatus={setStatus}
          callbackModal={clearModal}
          haveInput={false}
          placeholderInput={''}
        />
      )}
    </>
  )


  const handleLogout = async () => {
    try {
      await api.signOut()
      localStorage.clear()
      window.location.reload()
    } catch (error) {
      return toast.error('Error while logging out. Try again.')
    }
  }

  useEffect(() => {
    async function fetchData() {
      const usersData = await api.readAll()
      setUsers(usersData)
      api.setUsers(usersData)
    }
    fetchData()
  }, [api])
  
  return (
    <>
      <Container>
        <h2>Home</h2>
        <PageBody>
          <ResponsiveTable>
            <TableHeader>
              <TableHeaderCell>
                <p>Name</p>
              </TableHeaderCell>
              <TableHeaderCell>
                <p>Email</p>
              </TableHeaderCell>
            </TableHeader>
            <TableBody>
              {users.length > 0 ? (
                users.map((user: StoredUsers) => (
                  <TableBodyRow key={user.id}>
                    <TableBodyCell>
                      <p>{user.name}</p>
                    </TableBodyCell>
                    <TableBodyCell>
                      <p>{user.email}</p>
                    </TableBodyCell>
                    <TableBodyCell>
                      <FaPen
                        size={15}
                        onClick={() => handleActiveModal('EditUser', user.email)}
                      />
                      <RiDeleteBin2Line
                        size={18}
                        onClick={() => handleActiveModal('Confirmation', user.email)}
                      />
                    </TableBodyCell>
                  </TableBodyRow>
                ))
              ) : (
                <></>
              )}
            </TableBody>
          </ResponsiveTable>
        </PageBody>

        <ButtonContainer>
          <Button
            type={'button'}
            name={"Logout"}
            onClick={() => {handleLogout()}}
          />
        </ButtonContainer>
        <OpenModals />
      </Container>
    </>
  )
}