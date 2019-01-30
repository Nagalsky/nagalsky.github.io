/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Container = ({containerFluid, children}) => {
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${containerFluid ? '100%' : '1140px'};
        padding-left: 15px;
        padding-right: 15px;
      `}
    >
      {children}
    </div>
  )
}

export default Container
