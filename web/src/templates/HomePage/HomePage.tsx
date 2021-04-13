// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Heading, Text } from '../../components/ui'
import { Grid } from 'theme-ui'

import Section from '../../components/Section'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage textAlign="center">
      <Section>
        <Heading as="h1">
          Hello there, welcome to my new website!
        </Heading>
        <Text as="p">
          Soon you will be able to view my services and book massages.
        </Text>
      </Section>
    </S.HomePage>
  )
}

export default HomePage
