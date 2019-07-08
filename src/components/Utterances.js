import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

const src = "https://utteranc.es/client.js"
const elementId = "utterances"

const Utterances = ({ repo, theme, issueTerm, label }) => {
  const rootElm = useRef(null)

  useEffect(() => {
    const utterances = document.createElement("script")
    const utterancesConfig = {
      src,
      repo,
      "issue-term": issueTerm,
      theme: `github-${theme}`,
      label,
      crossorigin: "anonymous",
      async: true,
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return <div id={elementId} ref={rootElm} />
}

Utterances.propTypes = {
  repo: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]),
  issueTerm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(["pathname", "og:title", "title", "url"]),
  ]),
  label: PropTypes.string,
}

Utterances.defaultProps = {
  theme: "light",
}

export default Utterances
