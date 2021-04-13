// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'
import { darken, lighten } from 'polished'

// Suisse Works Book
import YesevaOneEot from './fonts/YesevaOne-Regular.eot'
import YesevaOneWoff2 from './fonts/YesevaOne-Regular.woff2'
import YesevaOneWoff from './fonts/YesevaOne-Regular.woff'
import YesevaOneTtf from './fonts/YesevaOne-Regular.ttf'

// Suisse Works Book
import SuisseWorksBookEot from './fonts/SuisseWorks-Book.eot'
import SuisseWorksBookWoff2 from './fonts/SuisseWorks-Book.woff2'
import SuisseWorksBookWoff from './fonts/SuisseWorks-Book.woff'
import SuisseWorksBookTtf from './fonts/SuisseWorks-Book.ttf'

// Suisse Works Bold
import SuisseWorksBoldEot from './fonts/SuisseWorks-Bold.eot'
import SuisseWorksBoldWoff2 from './fonts/SuisseWorks-Bold.woff2'
import SuisseWorksBoldWoff from './fonts/SuisseWorks-Bold.woff'
import SuisseWorksBoldTtf from './fonts/SuisseWorks-Bold.ttf'

// Suisse Mono Regular
import SuisseIntlMonoRegularEot from './fonts/SuisseIntlMono-Regular.eot'
import SuisseIntlMonoRegularWoff2 from './fonts/SuisseIntlMono-Regular.woff2'
import SuisseIntlMonoRegularWoff from './fonts/SuisseIntlMono-Regular.woff'
import SuisseIntlMonoRegularOtf from './fonts/SuisseIntlMono-Regular.otf'

// Suisse Mono Thin
import SuisseIntlMonoThinEot from './fonts/SuisseIntlMono-Thin.eot'
import SuisseIntlMonoThinWoff2 from './fonts/SuisseIntlMono-Thin.woff2'
import SuisseIntlMonoThinWoff from './fonts/SuisseIntlMono-Thin.woff'
import SuisseIntlMonoThinOtf from './fonts/SuisseIntlMono-Thin.otf'

// Suisse Mono Bold
import SuisseIntlMonoBoldEot from './fonts/SuisseIntlMono-Bold.eot'
import SuisseIntlMonoBoldWoff2 from './fonts/SuisseIntlMono-Bold.woff2'
import SuisseIntlMonoBoldWoff from './fonts/SuisseIntlMono-Bold.woff'
import SuisseIntlMonoBoldOtf from './fonts/SuisseIntlMono-Bold.otf'

// ___________________________________________________________________

const Typography = css`
  /* Yeseva One Regular */
  @font-face {
    font-family: 'YesevaOne';
    src: url(${YesevaOneEot});
    src: url(${YesevaOneWoff2}) format('woff2'),
      url(${YesevaOneWoff}) format('woff'),
      url(${YesevaOneTtf}) format('truetype'),
      url(${YesevaOneEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  /* Suisse Works Book */
  @font-face {
    font-family: 'SuisseWorks';
    src: url(${SuisseWorksBookEot});
    src: url(${SuisseWorksBookWoff2}) format('woff2'),
      url(${SuisseWorksBookWoff}) format('woff'),
      url(${SuisseWorksBookTtf}) format('truetype'),
      url(${SuisseWorksBookEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Works Bold */
  @font-face {
    font-family: 'SuisseWorks';
    src: url(${SuisseWorksBoldEot});
    src: url(${SuisseWorksBoldWoff2}) format('woff2'),
      url(${SuisseWorksBoldWoff}) format('woff'),
      url(${SuisseWorksBoldTtf}) format('truetype'),
      url(${SuisseWorksBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Mono Thin */
  @font-face {
    font-family: 'SuisseMono';
    src: url(${SuisseIntlMonoThinEot});
    src: url(${SuisseIntlMonoThinWoff2}) format('woff2'),
      url(${SuisseIntlMonoThinWoff}) format('woff'),
      url(${SuisseIntlMonoThinOtf}) format('opentype'),
      url(${SuisseIntlMonoThinEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Mono Regular */
  @font-face {
    font-family: 'SuisseMono';
    src: url(${SuisseIntlMonoRegularEot});
    src: url(${SuisseIntlMonoRegularWoff2}) format('woff2'),
      url(${SuisseIntlMonoRegularWoff}) format('woff'),
      url(${SuisseIntlMonoRegularOtf}) format('opentype'),
      url(${SuisseIntlMonoRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Mono Bold */
  @font-face {
    font-family: 'SuisseMono';
    src: url(${SuisseIntlMonoBoldEot});
    src: url(${SuisseIntlMonoBoldWoff2}) format('woff2'),
      url(${SuisseIntlMonoBoldWoff}) format('woff'),
      url(${SuisseIntlMonoBoldOtf}) format('opentype'),
      url(${SuisseIntlMonoBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
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
    font-weight: ${theme.fontWeights.regular};
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
