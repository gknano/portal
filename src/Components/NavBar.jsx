import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const NavBarStyle = styled.div`
  height: 70px;
  background: #f0f0f0;
  border-radius: 10px;
`

const Button = styled.button`
  height: 50px;
  width: 90px;
  border: 0;
  margin-left: 5px;
  margin-top: 10px;
  &:hover {
    background-color: #cfcbcb;
    border: 1px solid rgb(198, 198, 198);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`
// для удобства создаем массив статических значений
const navbarArr = [
  { to: '/', text: 'Main' },
  { to: '/tablepage', text: 'Table' },
]
const NavBar = () => {
  return (
    <NavBarStyle>
      {navbarArr.map(({ to, text }, i) => (
        <Button key={`navbar-button${i}`}>
          <Link to={to}>{text}</Link>
        </Button>
      ))}
    </NavBarStyle>
  )
}

export default NavBar
