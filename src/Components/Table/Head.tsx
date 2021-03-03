import React, { FC } from 'react'
import styled from '@emotion/styled'

const ThContainer = styled.th`
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

const HeaderCell: FC = ({ children }) => <ThContainer>{children}</ThContainer>

const headerTitles = [`\u{2116}`, 'Name', 'Email', 'Phone Number', '']

export const THead: FC = () => (
  <thead>
    <tr>
      {headerTitles.map((title) => (
        <HeaderCell key={`title-${title}`}>{title}</HeaderCell>
      ))}
    </tr>
  </thead>
)
