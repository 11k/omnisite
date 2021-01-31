import React from 'react'
import { useDispatch } from 'react-redux'
import { Nav, Navbar } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { ShieldAlt, SignInAlt, Tv, UserCircle } from '@styled-icons/fa-solid'

import { colors } from 'design-system'
import { ModalTypes } from 'lib/enums'
import { toggleModal } from 'store/slices/uiSlice'

type Props = {
  isLoggedIn: boolean
}

const Header: React.FC<Props> = ({ isLoggedIn }) => {
  const dispatch = useDispatch()
  const handleClick = () => dispatch(toggleModal(ModalTypes.LOGIN))

  return (
    <Navbar expand="lg">
      <Link href="/" passHref>
        <Brand>
          <StyledImage src="/img/dgg-logo.svg" layout="fill" />
        </Brand>
      </Link>
      <Nav className="mr-auto">
        <Link href="/youtube" passHref>
          <StyledLink>YouTube</StyledLink>
        </Link>
        <Link href="/instagram" passHref>
          <StyledLink>Instagram</StyledLink>
        </Link>
        <Link href="/reddit" passHref>
          <StyledLink>Reddit</StyledLink>
        </Link>
        <Link href="/facebook" passHref>
          <StyledLink>Facebook</StyledLink>
        </Link>
        <Link href="/blog" passHref>
          <StyledLink>Blog</StyledLink>
        </Link>
        <Link href="/discord" passHref>
          <StyledLink>Discord</StyledLink>
        </Link>
        <Link href="/donate" passHref>
          <StyledLink>Donate</StyledLink>
        </Link>
        <Link href="/subscribe" passHref>
          <StyledLink>Subscribe</StyledLink>
        </Link>
        <Link href="/shop" passHref>
          <StyledLink>Shop</StyledLink>
        </Link>
      </Nav>
      <Nav>
        <Link href="/bigscreen" passHref>
          <StyledLink>
            <StyledTv />
            Big Screen
          </StyledLink>
        </Link>
        {isLoggedIn ? (
          <Link href="/profile" passHref>
            <StyledLink>
              <StyledUserCircle />
              Account
            </StyledLink>
          </Link>
        ) : (
          <StyledLink onClick={handleClick}>
            <StyledSignIn />
            Sign In
          </StyledLink>
        )}
        {/* <Link href="/admin" passHref>
          <StyledLink>
            <ShieldAlt />
          </StyledLink>
        </Link> */}
      </Nav>
    </Navbar>
  )
}

export default Header

const Brand = styled(Navbar.Brand)`
  position: relative;
  width: 105px;
  height: 30px;
  margin-right: 0.5em;
`
const StyledImage = styled(Image)`
  object-fit: cover;
`

const StyledLink = styled(Nav.Link)`
  display: flex;
  align-items: center;
  color: ${colors.light} !important;
  text-shadow: 0 0 1px black;
  :active,
  :focus,
  :hover {
    color: white !important;
  }
  :last-of-type {
    padding-right: 0 !important;
  }
`
const StyledSignIn = styled(SignInAlt)`
  font-weight: 900;
  width: 1.25em;
  margin-right: 0.25em;
`

const StyledTv = styled(Tv)`
  font-weight: 900;
  width: 1.25em;
  margin-right: 0.25em;
`
const StyledUserCircle = styled(UserCircle)`
  font-weight: 900;
  width: 1.25em;
  margin-right: 0.25em;
`
