/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { buttonStyle, space, layout, shadow, typography } from 'styled-system'

const StyledButton = styled('button')(
  buttonStyle,
  space,
  layout,
  shadow,
  typography,
)

const Button = ({
  children,
  btnBlock,
  btnSm,
  btnMd,
  hasShadow,
  ...restProps
}) => {
  return (
    <StyledButton
      {...restProps}
      css={css`
        box-shadow: ;
        width: ${btnBlock && '100%'};
        padding: ${btnSm && '5px 20px'};
        padding: ${btnMd && '12px 30px'};
        font-size: ${btnSm && '12px'};
        box-shadow: ${hasShadow && '0 0 4px 1px rgba(0, 0, 0, 0.25)'};
        padding-left: ${btnBlock && '15px'};
        padding-right: ${btnBlock && '15px'};
        &:hover,
        &:focus {
          box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.25);
        }
      `}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'link',
    'secondary',
  ]),
  type: PropTypes.string,
}

Button.defaultProps = {
  variant: 'default',
  type: 'button',
}

export default Button
