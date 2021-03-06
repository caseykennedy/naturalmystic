// MobileNav:
// Mobile Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Text } from '../../ui'

// ___________________________________________________________________

type LinkProps = {
  item: any
  handleExitOnClick: () => any
}

type NavLinksProps = {
  handleExitOnClick: () => any
  open: boolean
}

const NavLink = ({ item, handleExitOnClick }: LinkProps) => {
  return (
    <S.NavLink onClick={handleExitOnClick}>
      <Box className="nav-mobile-sub">
        <Link to={item.link} className="nav-mobile__link">
          {item.name}
        </Link>
      </Box>
    </S.NavLink>
  )
}

const MobileNav: React.FC<NavLinksProps> = ({ handleExitOnClick, open }) => {
  return (
    <S.MobileNav>
      {data.map((item, idx) => (
        <NavLink
          key={idx}
          handleExitOnClick={handleExitOnClick}
          item={item}
        />
      ))}
    </S.MobileNav>
  )
}

export default MobileNav

// ___________________________________________________________________

const data = [
  {
    name: 'about',
    link: '/about'
  },
  {
    name: 'donate',
    link: '/donate'
  },
  {
    name: 'grants',
    link: '/grants'
  },
  {
    name: 'blog',
    link: '/blog'
  }
]
