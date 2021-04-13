// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex } from 'theme-ui'

// ___________________________________________________________________

export const Header = styled(Box)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`

export const Logo = styled(Flex)`
  display: flex;
  align-items: center;

  .symbol {
    max-height: ${theme.space[5]};

    @media ${theme.mq.tablet} {
      max-height: calc(${theme.space[5]} * 1.25);
    }

    svg {
      width: ${theme.space[5]};

      @media ${theme.mq.tablet} {
        max-height: calc(${theme.space[5]} * 1.25);
        width: calc(${theme.space[5]} * 1.25);
      }
    }
  }
`
