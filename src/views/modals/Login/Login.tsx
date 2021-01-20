// TODO: Make this pretty
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from 'next-auth/client'
import { Button, Modal } from 'react-bootstrap'
import { Discord } from '@styled-icons/fa-brands'
import styled from 'styled-components'

import { colors } from 'design-system'
import { ModalTypes } from 'lib/enums'
import { toggleModal } from 'store/slices/uiSlice'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const modal = useSelector((state) => state.ui.modal)
  const isVisible = modal === ModalTypes.LOGIN

  const handleClose = () => dispatch(toggleModal(ModalTypes.NONE))

  return (
    <Modal centered onHide={handleClose} show={isVisible}>
      {/* <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header> */}
      <Body>
        <Button onClick={() => signIn('discord')}>
          <StyledDiscord />
          Discord
        </Button>
      </Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  )
}

const Body = styled(Modal.Body)`
  /* background-color: ${colors.bgColor}; */
  color: ${colors.text1};
  /* border-radius: 5px; */
  /* box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.5); */
  /* position: relative;
  display: flex;
  flex-direction: column; */
  /* width: 100%; */
  /* background-clip: padding-box; */
  /* border: 1px solid rgba(0, 0, 0, 0.2); */
  /* border-radius: 0.3rem;
  outline: 0; */
`

const StyledDiscord = styled(Discord)`
  font-weight: 900;
  width: 1.25em;
  margin-right: 0.5em;
`

export default Login
