import styled from '@emotion/styled'
import theme from './theme'

const Root = styled.div`
  font-family: ${theme.fontFamily.base};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch;
  color: ${theme.colors.base};
`

export default Root
