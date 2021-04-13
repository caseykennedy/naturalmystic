// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

import Section from '../Section'

// ___________________________________________________________________

export const Footer = styled(Flex)`
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  background: ${theme.colors.background};
  border-top: ${theme.border};
  position: relative;

  .footer-inner {
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    max-width: ${theme.maxWidth};
    width: 100%;
  }
`
