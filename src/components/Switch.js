import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Switch = ({
  children,
  className,
  style,
  innerLabel,
  innerLabelChecked,
  label,
  alignRight,
  ...inputProps
}) => {
  const switchLabels =
    innerLabel || innerLabelChecked
      ? [
          <IndicatorChild key="checked">
            <SwitchInnerNode>
              {innerLabelChecked ? innerLabelChecked : innerLabel}
            </SwitchInnerNode>
          </IndicatorChild>,
          <IndicatorChild key="unchecked">
            <SwitchInnerNode>{innerLabel}</SwitchInnerNode>
          </IndicatorChild>,
        ]
      : null
  return (
    <Label
      className={className}
      style={style}
      alignRight={alignRight}
      label={label}
    >
      <Input type="checkbox" {...inputProps} />
      <Indicator>{switchLabels}</Indicator>
      {label}
      {children}
    </Label>
  )
}

Switch.defaultProps = {
  label: "",
}

Switch.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  innerLabel: PropTypes.string,
  innerLabelChecked: PropTypes.string,
  label: PropTypes.string,
  alignRight: PropTypes.bool,
}

export default Switch

const Indicator = styled.span`
  text-transform: none;
  border: none;
  border-radius: 1.75em;
  box-shadow: none !important;
  background-color: rgba(167, 182, 194, 0.5);
  width: auto;
  min-width: 1.75em;
  transition: background-color 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
  display: inline-block;
  position: relative;
  margin-top: -3px;
  margin-right: 10px;
  cursor: pointer;
  height: 1em;
  vertical-align: middle;
  font-size: 16px;
  user-select: none;

  &:before {
    display: block;
    position: absolute;
    left: 0;
    margin: 2px;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
    background-color: ${props => props.theme.white};
    background-clip: padding-box;
    width: calc(1em - 4px);
    height: calc(1em - 4px);
    content: "";
    transition: left 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
  }
`

const IndicatorChild = styled.div`
  &:first-child {
    visibility: hidden;
    margin-right: 1.2em;
    margin-left: 0.5em;
    line-height: 0;
  }

  &:last-child {
    visibility: visible;
    line-height: 1em;
    margin-right: 0.5em;
    margin-left: 1.2em;
  }
`

const Label = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  text-transform: none;
  line-height: 1rem;
  /* margin-bottom: 10px; */

  &:hover input ~ ${Indicator} {
    background-color: rgba(115, 134, 148, 0.5);
  }

  &:hover input:checked ~ ${Indicator} {
    background-color: ${props => props.theme.themeTertiary};
  }

  padding-right: ${props => (props.alignRight ? 38 : 0)}px;
  padding-left: ${props => (props.alignRight ? 0 : 38)}px;

  ${Indicator} {
    margin-right: ${props => (props.alignRight ? -38 : props.label ? 5 : 0)}px;
    margin-left: ${props => (props.alignRight ? (props.label ? 5 : 0) : -38)}px;
    margin-top: ${props => (props.alignRight ? 1 : 0)}px;
    float: ${props => (props.alignRight ? "right" : "none")};
  }
`

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  padding: 0;

  & ~ ${Indicator} {
    background-color: rgba(167, 182, 194, 0.5);
  }

  &:checked ~ ${Indicator} ${IndicatorChild} {
    &:first-child {
      visibility: visible;
      line-height: 1em;
    }

    &:last-child {
      visibility: hidden;
      line-height: 0;
    }
  }

  &:checked ~ ${Indicator} {
    box-shadow: none;
    background-color: ${props => props.theme.themeLight};

    &:before {
      left: calc(100% - 1em);
    }
  }

  &:checked:disabled ~ ${Indicator} {
    background-color: rgba(19, 124, 189, 0.5);
  }

  &:checked:not(:disabled):active ~ ${Indicator} {
    background-color: ${props => props.theme.themeDark};
  }

  &:disabled {
    & ~ ${Indicator} {
      background-color: rgba(206, 217, 224, 0.5);
    }
  }

  &:not(:disabled):active ~ ${Indicator} {
    background-color: rgba(92, 112, 128, 0.5);
  }
`

const SwitchInnerNode = styled.div`
  text-align: center;
  font-size: 0.7em;
`
