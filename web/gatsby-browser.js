// gatsby-ssr

import React from 'react'
import Layout from './src/components/Layout'

// Styles + Theme
import theme from './src/gatsby-plugin-theme-ui'
import GlobalStyles from './src/styles/global'

// Providers
import { ThemeProvider } from 'styled-components'

// ___________________________________________________________________

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
