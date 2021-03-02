import * as React from 'react'
import styled from '@emotion/styled'
import { PageContainer } from '../PageContainer'

const MainPageStyle = styled.h1`
  transform: translate(50%, 50%);
  position: absolute;
  top: 40%;
  left: 30%;
`

const MainPage: React.FC = () => {
  return (
    <PageContainer>
      <MainPageStyle>Добро пожаловать!</MainPageStyle>
    </PageContainer>
  )
}

export default MainPage
