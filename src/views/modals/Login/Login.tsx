// TODO: Make this pretty
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from 'next-auth/client'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import {
  Discord,
  Google,
  Reddit,
  Twitch,
  Twitter,
} from '@styled-icons/fa-brands'
import styled, { css } from 'styled-components'

import { colors } from 'design-system'
import { ModalTypes } from 'lib/enums'
import { toggleModal } from 'store/slices/uiSlice'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const modal = useSelector((state) => state.ui.modal)
  const isVisible = modal === ModalTypes.LOGIN

  const handleClose = () => dispatch(toggleModal(ModalTypes.NONE))

  return (
    <StyledModal centered onHide={handleClose} show={isVisible}>
      <Modal.Body>
        <Row>
          <StyledCol md={5} style={{ display: 'flex', paddingRight: 0 }}>
            <FlexRow>
              <FlexCol>
                <Header>Login</Header>
                <Text>
                  Use your favorite provider to login and chat, subscribe, and
                  more!
                </Text>
              </FlexCol>
              <Divider />
            </FlexRow>
          </StyledCol>
          <StyledCol md={7}>
            <StyledButton
              color={colors.twitch}
              onClick={() => signIn('twitch')}
            >
              <StyledTwitch />
              Twitch
            </StyledButton>
            <StyledButton
              color={colors.google}
              onClick={() => signIn('google')}
            >
              <StyledGoogle />
              Google
            </StyledButton>
            <StyledButton
              color={colors.twitter}
              disabled
              onClick={() => signIn('twitter')}
            >
              <StyledTwitter />
              Twitter
            </StyledButton>
            <StyledButton
              color={colors.reddit}
              onClick={() => signIn('reddit')}
            >
              <StyledReddit />
              Reddit
            </StyledButton>
            <StyledButton
              color={colors.discord}
              onClick={() => signIn('discord')}
            >
              <StyledDiscord />
              Discord
            </StyledButton>
          </StyledCol>
        </Row>
      </Modal.Body>
    </StyledModal>
  )
}

const StyledModal = styled(Modal)`
  .modal-content {
    background-color: ${colors.bgColor};
    border: 1px solid ${colors.bgColor} !important;
  }
`

const Divider = styled.div`
  border-right: 1px solid ${colors.text1};
  flex: 1;
  margin: 1em 0px;
  width: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`

const StyledCol = styled(Col)`
  padding: 16px 32px;
`

// TODO: Create Flex and Text components in design-system

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 32px;
`
const FlexRow = styled.div`
  display: flex;
`

const Header = styled.h1`
  color: white;
`

const Text = styled.p`
  color: ${colors.text2};
`

const iconMixin = css`
  font-weight: 900;
  width: 1.5em;
  margin-right: 0.5em;
`

const StyledDiscord = styled(Discord)`
  ${iconMixin}
`

const StyledGoogle = styled(Google)`
  ${iconMixin}
`

const StyledReddit = styled(Reddit)`
  ${iconMixin}
`

const StyledTwitch = styled(Twitch)`
  ${iconMixin}
`

const StyledTwitter = styled(Twitter)`
  ${iconMixin}
`

// TODO: Make this a design-system component
const StyledButton = styled(Button)`
  background-color: ${({ color }) => color};
  border-color: ${({ color }) => color};
  box-shadow: none !important;
  transition: all 0.1s ease-in-out !important;
  width: 100%;
  :not(:last-of-type) {
    margin-bottom: 0.5em;
  }

  // TODO: Consider box-shadow or border for focus and active states

  :active,
  :focus,
  :hover {
    background-color: ${({ color }) => color} !important;
    border-color: ${({ color }) => color} !important;
  }
  :active {
    transform: scale(0.95);
  }
  :hover {
    filter: brightness(1.1);
  }
`

export default Login
