import { css } from "styled-components"

import fullyResponsive from "utils/fullyResponsive"

const text = {
  h1: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 600; // medium
    font-size: 180px;
    letter-spacing: -0.04em;
    line-height: 85%;
  `),
  h1p: fullyResponsive(css`
    font-family: "Panchang";
    font-weight: 600; // medium
    font-size: 180px;
    letter-spacing: -0.04em;
    line-height: 85%;
  `),
  h2: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 120px;
    letter-spacing: -0.04em;
    line-height: 85%;
  `),
  h2p: fullyResponsive(css`
    font-family: "Panchang";
    font-weight: 500; // medium
    font-size: 120px;
    letter-spacing: -0.04em;
    line-height: 85%;
  `),
  h3: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 90px;
    letter-spacing: -0.04em;
    line-height: 85%;
  `),
  h4: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 64px;
    letter-spacing: -0.03em;
    line-height: 100%;
  `),
  h5: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 48px;
    letter-spacing: -0.03em;
    line-height: 110%;
  `),
  h6: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 36px;
    letter-spacing: -0.03em;
    line-height: 115%;
  `),
  h7: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 26px;
    letter-spacing: -0.02em;
    line-height: 120%;
  `),
  h8: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 20px;
    letter-spacing: -0.02em;
    line-height: 130%;
  `),
  h9: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 14px;
    letter-spacing: -0.01em;
    line-height: 130%;
  `),
  h10: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 12px;
    letter-spacing: -0.01em;
    line-height: 130%;
  `),
  titleLarge: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 600; // semibold
    font-size: 22px;
    letter-spacing: -0.01em;
    line-height: 140%;
  `),
  titleSmall: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 600; // semibold
    font-size: 18px;
    letter-spacing: -0.01em;
    line-height: 145%;
  `),
  kicker: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 300; // light
    font-size: 12px;
    letter-spacing: 0.35em;
    line-height: 105%;
  `),
  caption: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 600; // semibold
    font-size: 13px;
    letter-spacing: 0.08em;
    line-height: 125%;
  `),
  captionSmall: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 600; // semibold
    font-size: 11px;
    letter-spacing: 0.06em;
    line-height: 125%;
  `),
  bodyXXL: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 26px;
    letter-spacing: 0;
    line-height: 130%;
  `),
  bodyXL: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 22px;
    letter-spacing: 0;
    line-height: 130%;
  `),
  bodyLarge: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 18px;
    letter-spacing: 0;
    line-height: 130%;
  `),
  bodyExtraLarge: fullyResponsive(css`
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 130%;
    text-align: center;
  `),
  bodyDefault: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 16px;
    letter-spacing: 0;
    line-height: 130%;
  `),
  bodySmall: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 400; // regular
    font-size: 12px;
    letter-spacing: 0;
    line-height: 130%;
  `),
  bodyExtraSmall: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 400; // regular
    font-size: 9px;
    letter-spacing: 0;
    line-height: 140%;
  `),
  linkLarge: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 18px;
    letter-spacing: 0;
    line-height: 140%;
  `),
  link: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 16px;
    letter-spacing: 0;
    line-height: 145%;
  `),
  linkSmall: fullyResponsive(css`
    font-family: "Satoshi";
    font-weight: 500; // medium
    font-size: 14px;
    letter-spacing: 0;
    line-height: 125%;
  `),
}

export const strokeText = css`
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`

export const strokeTextTransparent = css`
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`

export const transparentText = css`
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
`

export default text
