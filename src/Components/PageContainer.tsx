import * as React from 'react'
import styled from '@emotion/styled'
import { PageConteinerProps } from '../types/index'
import { dimensions } from '../Styles/variables'

const StyledPage = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: ${dimensions.containerPadding}rem;
`

export const PageContainer: React.FC<PageConteinerProps> = ({
  children,
  className,
  style,
}) => (
  <StyledPage className={className} style={style}>
    {children}
  </StyledPage>
)
