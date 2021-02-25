import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { THead } from './Head'
import { CustomButton } from '../CustomButton'

const TableContainer = styled.table`
  overflow: hidden;
  border: 1px solid #d3d3d3;
  background: #fefefe;
  width: 100%;
  margin: 5% auto 0;
  border-radius: 5px;
  -moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 4px rgb(0 0 0 / 20%);
`

const TdContainer = styled.td`
  padding: 18px 28px 18px;
  text-align: center;
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 25%,
    from(#f9f9f9),
    to(#fefefe)
  );
`

const BodyCell = ({ children }) => <TdContainer>{children}</TdContainer>

export const Table = () => {
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUserInfo(json))
  }, [])

  const onDeleteHandler = (e, i) => {
    userInfo.splice(i, 1)

    setUserInfo([...userInfo])
  }
  return (
    <TableContainer>
      <THead />
      <tbody>
        {userInfo.map(({ name, email, phone }, i) => (
          <tr key={`user-info-tr${i}`}>
            <BodyCell>{name}</BodyCell>
            <BodyCell>{email}</BodyCell>
            <BodyCell>{phone}</BodyCell>
            <BodyCell>
              <CustomButton onClick={(e) => onDeleteHandler(e, i)}>
                {'Удалить'}
              </CustomButton>
            </BodyCell>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  )
}
