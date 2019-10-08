import styled from '@emotion/styled'
import {
  color,
  background,
  space,
  layout,
  shadow,
  position,
  flexbox,
  typography,
  border,
  grid,
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
  position,
  layout,
  shadow,
  flexbox,
  typography,
  grid,
  border,
  system({
    textTransform: {
      property: 'textTransform',
      scale: 'breakpoints',
    },
  }),
)

export default Box
