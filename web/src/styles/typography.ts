// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'
import { darken, lighten } from 'polished'

// Aeonik Regular
import AeonikRegularEot from './fonts/AeonikRegular.eot'
import AeonikRegularWoff2 from './fonts/AeonikRegular.woff2'
import AeonikRegularWoff from './fonts/AeonikRegular.woff'
import AeonikRegularOtf from './fonts/AeonikRegular.otf'

// Aeonik Light
import AeonikLightEot from './fonts/AeonikLight.eot'
import AeonikLightWoff2 from './fonts/AeonikLight.woff2'
import AeonikLightWoff from './fonts/AeonikLight.woff'
import AeonikLightOtf from './fonts/AeonikLight.otf'

// Aeonik Medium
import AeonikMediumEot from './fonts/Aeonik-Medium.eot'
import AeonikMediumWoff2 from './fonts/Aeonik-Medium.woff2'
import AeonikMediumWoff from './fonts/Aeonik-Medium.woff'
import AeonikMediumTtf from './fonts/Aeonik-Medium.ttf'

// Aeonik Bold
import AeonikBoldEot from './fonts/AeonikBold.eot'
import AeonikBoldWoff2 from './fonts/AeonikBold.woff2'
import AeonikBoldWoff from './fonts/AeonikBold.woff'
import AeonikBoldOtf from './fonts/AeonikBold.otf'

// Aeonik Black
import AeonikBlackEot from './fonts/AeonikBlack.eot'
import AeonikBlackWoff2 from './fonts/AeonikBlack.woff2'
import AeonikBlackWoff from './fonts/AeonikBlack.woff'
import AeonikBlackOtf from './fonts/AeonikBlack.otf'

// ___________________________________________________________________

const Typography = css`
  /* Aeonik Regular */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikRegularEot});
    src: url(${AeonikRegularWoff2}) format('woff2'),
      url(${AeonikRegularWoff}) format('woff'),
      url(${AeonikRegularOtf}) format('opentype'),
      url(${AeonikRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Light */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikLightEot});
    src: url(${AeonikLightWoff2}) format('woff2'),
      url(${AeonikLightWoff}) format('woff'),
      url(${AeonikLightOtf}) format('opentype'),
      url(${AeonikLightEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Medium */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikMediumEot});
    src: url(${AeonikMediumWoff2}) format('woff2'),
      url(${AeonikMediumWoff}) format('woff'),
      url(${AeonikMediumTtf}) format('truetype'),
      url(${AeonikMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Bold */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBoldEot});
    src: url(${AeonikBoldWoff2}) format('woff2'),
      url(${AeonikBoldWoff}) format('woff'),
      url(${AeonikBoldOtf}) format('opentype'),
      url(${AeonikBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Black */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBlackEot});
    src: url(${AeonikBlackWoff2}) format('woff2'),
      url(${AeonikBlackWoff}) format('woff'),
      url(${AeonikBlackOtf}) format('opentype'),
      url(${AeonikBlackEot}?#iefix) format('embedded-opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  body {
    color: ${theme.colors.text};

    font-size: ${theme.root.font.baseSize};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.root.font.bodyLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';

    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  mark {
    background-color: ${theme.colors.quinary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 400;
    line-height: ${theme.root.font.headingLineHeight};
    letter-spacing: ${theme.root.font.headingLetterSpacing};
    margin: 0 0 ${theme.space[3]};
    transition: ${theme.transition.all};
  }

  .text--xxxl {
    font-size: calc(${theme.fontSizes[4]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[6]} / 1);
    }

    @media ${theme.mq.desktop} {
      font-size: calc(${theme.fontSizes[7]} / 1);
    }
  }

  h1,
  .text--xxl {
    /* font-family: ${theme.fonts.display}; */
    font-size: calc(${theme.fontSizes[5]});

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[6]};
    }
  }

  h2,
  .text--xl {
    font-size: ${theme.fontSizes[4]};

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[5]};
    }
  }

  h3,
  .text--lg {
    font-size: calc(${theme.fontSizes[3]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[4]});
    }
  }

  h4,
  .text--md {
    font-size: calc(${theme.fontSizes[3]} / 1.25);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]});
    }
  }

  h5,
  .text--sm {
    font-size: calc(${theme.fontSizes[2]} / 1.25);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[2]});
    }
  }

  .text--xs {
    font-size: ${theme.root.font.xs};
  }

  p,
  .text--base {
    font-size: ${theme.fontSizes[2]};
    font-weight: 400;
    line-height: ${theme.root.font.bodyLineHeight};
    margin: 0 0 ${theme.space[3]};

    &:last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: underline;
      color: ${theme.colors.primary};

      &:hover,
      &:focus {
        text-decoration: none;
        color: ${theme.colors.primary};
      }
    }

    strong {
    }
  }

  strong {
    font-weight: 600;
  }

  .text--small {
    font-size: calc(${theme.fontSizes[0]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[1]});
    }
  }

  .t-underline {
    text-decoration: underline;
  }

  .t--dual-col {
    column-count: 1;

    @media ${theme.mq.tablet} {
      column-count: 2;
    }
  }

  .text--uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .text--underline {
    text-decoration: underline;
  }

  .text--justify {
    @media ${theme.mq.tablet} {
      text-align: justify;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    /* text-decoration-thickness: 1.5px; */

    position: relative;
    transition: ${theme.transition.all};

    /* &:hover,
    &:focus {
      color: ${theme.colors.primary};
      text-decoration: none;
    } */
  }

  mark {
    background-color: transparent;
    border: 2px solid red;
    color: inherit;
    padding: 0 calc(${theme.space[1]} / 1.5);
  }

  ul {
    margin: 0 0 ${theme.space[6]} ${theme.space[4]};
    /* list-style-position: inside; */
    list-style-type: square;

    @media ${theme.mq.tablet} {
      margin: 0 0 ${theme.space[6]} ${theme.space[4]};
    }

    li {
      font-size: ${theme.fontSizes[2]};
      margin: 0 0 ${theme.space[4]};

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[2]} * 1.25);
      }

      &:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: underline;
        color: ${theme.colors.primary};

        &:hover,
        &:focus {
          text-decoration: none;
          color: ${theme.colors.primary};
        }
      }

      strong {
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
