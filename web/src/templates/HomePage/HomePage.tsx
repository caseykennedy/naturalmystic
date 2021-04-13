// HomePage:

// ___________________________________________________________________

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'
import { Grid } from 'theme-ui'

import Section from '../../components/Section'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Grid columns={[1, 2]} gap={0}>
        <Flex>
          <Section bg="quinary" pt={7}>
            <Heading as="h1">Hello there, welcome to my new website!</Heading>
            <Text as="p">
              Soon you will be able to view my services and book your massage.
            </Text>
          </Section>
        </Flex>

        <Flex>
          <StaticImage src="../../images/sage.jpg" alt="Sage fresh" />
        </Flex>
      </Grid>
    </S.HomePage>
  )
}

export default HomePage
