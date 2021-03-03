import React, { FC } from 'react'
import styled from '@emotion/styled'
import { PageContainer } from '../PageContainer'
import { Table } from '../Table/index'

const TablePageStyle = styled.h1`
  transform: translate(50%, 50%);
  position: absolute;
  top: 40%;
  left: 30%;
`

const TablePage: FC = () => {
  return (
    <PageContainer>
      <Table />
    </PageContainer>
  )
}

export default TablePage
