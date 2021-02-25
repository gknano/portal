import React from 'react'
import styled from '@emotion/styled'
import { PageContainer } from '../PageContainer'

const TablePageStyle = styled.h1`
  transform: translate(50%, 50%);
  position: absolute;
  top: 40%;
  left: 30%;
`

const TablePage = () => {
  return (
    <PageContainer>
      <TablePageStyle>This is TablePage!!</TablePageStyle>
    </PageContainer>
  )
}

export default TablePage
