import { css } from "styled-components"

export default css`
  code[class*="language-"],
  pre[class*="language-"] {
    color: ${({ theme }) => theme.neutralDark};
    font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier,
      monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    font-size: 0.95em;
    line-height: 1.2em;
    border-radius: 4px;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    background: ${({ theme }) => theme.themeLight};
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    background: ${({ theme }) => theme.themeLight};
  } */

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    background-color: ${({ theme }) => theme.neutralLighterAlt};
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.2em;
    padding-top: 1px;
    padding-bottom: 1px;
    background-color: ${({ theme }) => theme.neutralLighterAlt};
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${({ theme }) => theme.neutralTertiary};
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.string {
    color: ${({ theme }) => theme.greenDark};
  }

  .token.punctuation,
  .token.operator {
    color: ${({ theme }) => theme.neutralDark}; /* no highlight */
  }

  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.inserted {
    color: ${({ theme }) => theme.redDark};
  }

  .token.atrule,
  .token.keyword,
  .token.attr-value,
  .language-autohotkey .token.selector,
  .language-json .token.boolean,
  .language-json .token.number,
  code[class*="language-css"] {
    color: ${({ theme }) => theme.themeDarkAlt};
  }

  .token.function {
    color: ${({ theme }) => theme.neutralDark};
  }
  .token.deleted,
  .language-autohotkey .token.tag {
    color: #9a050f;
  }

  .token.selector,
  .language-autohotkey .token.keyword {
    color: #00009f;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.class-name,
  .language-json .token.property {
    color: #2b91af;
  }

  .token.tag,
  .token.selector {
    color: #800000;
  }

  .token.attr-name,
  .token.property,
  .token.regex,
  .token.entity {
    color: #ff0000;
  }

  .token.directive.tag .tag {
    background-color: ${({ theme }) => theme.neutralLight};
    color: ${({ theme }) => theme.neutralDark};
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
  .line-numbers .line-numbers-rows {
    border-right-color: ${({ theme }) => theme.neutralLight};
  }

  .line-numbers-rows > span:before {
    color: ${({ theme }) => theme.neutralTertiaryAlt};
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
  .line-highlight {
    background: rgba(193, 222, 241, 0.2);
    background: -webkit-linear-gradient(
      left,
      rgba(193, 222, 241, 0.2) 70%,
      rgba(221, 222, 241, 0)
    );
    background: linear-gradient(
      to right,
      rgba(193, 222, 241, 0.2) 70%,
      rgba(221, 222, 241, 0)
    );
  }
`
