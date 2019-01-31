/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { breakpoints } from '../../lib/breakpoints'

const Container = ({ containerFluid, children, containerHeader }) => {
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${containerFluid ? '100%' : '1140px'};
        padding-left: 15px;
        padding-right: 15px;
        ${breakpoints.smUp} {
          display: ${containerHeader && 'flex'};
          align-items: ${containerHeader && 'center'};
          flex-direction: ${containerHeader && 'row'};
          justify-content: ${containerHeader && 'space-between'};
        }
      `}
    >
      {children}
    </div>
  )
}

export default Container
