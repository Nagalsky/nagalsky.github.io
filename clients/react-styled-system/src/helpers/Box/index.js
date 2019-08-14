import styled from '@emotion/styled'
import {
  color,
  background,
  space,
  layout,
  shadow,
  flexbox,
  typography,
  border,
  system,
} from 'styled-system'

const flexProps = ['alignItems', 'justifyContent', 'flexDirection', 'flexWrap']

const Box = styled('div')(
  props =>
    flexProps.some(x => props[x] !== null && props[x] !== undefined)
      ? 'display: flex;'
      : '',
  {
    boxSizing: 'border-box',
  },
  color,
  background,
  space,
  layout,
  shadow,
  flexbox,
  typography,
  border,
  system({
    textTransform: {
      property: 'textTransform',
      scale: 'breakpoints',
    },
  }),
)

export default Box
