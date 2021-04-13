// Footer:
// TODO:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// ___________________________________________________________________

const getYear = () => new Date().getFullYear()

const Footer: React.FC = () => {
  return (
    <S.Footer as="footer" pt={[4, 4]} pb={[6]} px={theme.gutter.axis}>
      <Box className="footer-inner">
        {/* <Text as="a" className="text--xxl">donate</Text> */}

        <Flex>
          <Box mr={4}>
            &copy;{getYear()} &bull;{' '}
            <Link
              to="/"
              className="logo-symbol"
              aria-label="HNSF, back to home"
            >
              natural mystic
            </Link>
          </Box>
        </Flex>

        <Box as="nav">
          <a href="mailto:fran@naturalmysticmassage.com">
            contact
          </a>
        </Box>
      </Box>
    </S.Footer>
  )
}

export default Footer
