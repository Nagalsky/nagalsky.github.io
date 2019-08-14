import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { buttonStyle, space } from 'styled-system'

const StyledButton = styled('button')(buttonStyle, space)

const Button = ({ children, ...restProps }) => {
  return <StyledButton {...restProps}>{children}</StyledButton>
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'success']),
  type: PropTypes.string,
}

Button.defaultProps = {
  variant: 'default',
  type: 'button',
}

export default Button
