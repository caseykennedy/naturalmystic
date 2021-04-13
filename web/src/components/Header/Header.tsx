// Header:
// Site Header with logo

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'

// ___________________________________________________________________

const Header = () => {
  return (
    <S.Header py={4} px={theme.gutter.axis}>
      <Link to="/" className="logo" aria-label="HNSF, back to home">
        <S.Logo>Natural Mystic</S.Logo>
      </Link>
    </S.Header>
  )
}

export default Header
