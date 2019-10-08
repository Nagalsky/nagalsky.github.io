import React from 'react'
import PropTypes from 'prop-types'
import IcomoonReact from 'icomoon-react'
import iconSet from '../../../assets/icons/selection.json'
import styled from '@emotion/styled'
import { color, space, layout, position } from 'styled-system'

const StyledIcomoonReact = styled(IcomoonReact)`
  ${color}
  ${space}
  ${layout}
  ${position}
`

const Icon = props => {
  const { color, size, icon, className, ...restProps } = props
  return (
    <StyledIcomoonReact
      {...restProps}
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Icon.defaultProps = {
  className: 'icon',
  color: '',
  size: '14px',
}

export default Icon
