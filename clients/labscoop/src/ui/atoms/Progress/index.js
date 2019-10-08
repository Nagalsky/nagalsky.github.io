/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import theme from '../../../lib/theme'

import { Box } from '../../../helpers/'
import { Text } from '../../'

const Progress = ({ ...restProps }) => {
  const { active, title, date } = restProps
  return (
    <Box
      {...restProps}
      position="relative"
      px={[2, 2, 2, 2, '35px']}
      pt={['10px', 2]}
      pb={['10px', 0]}
      textAlign={['left', 'center']}
      css={css`
        &:before,
        &:after {
          content: '';
          position: absolute;
        }
        &:before {
          height: 7px;
          width: 100%;
          background-color: ${active
            ? theme.colors.warning
            : theme.colors.success};
          top: 0;
          left: 0;
          @media (max-width: 575px) {
            height: 100%;
            width: 7px;
          }
        }
        &:after {
          top: 7px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-block;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 6px 0 6px;
          border-color: ${active ? theme.colors.warning : theme.colors.success}
            transparent transparent transparent;
          @media (max-width: 575px) {
            border-width: 6px 0 6px 6px;
            border-color: transparent transparent transparent
              ${active ? theme.colors.warning : theme.colors.success};
            left: 7px;
            transform: translateX(0);
            transform: translateY(-50%);
            top: 50%;
          }
        }
      `}
    >
      <Text
        fontSize={['14px', '10px', '11px', '12px', '14px']}
        fontFamily={theme.fontFamily.bold}
        mb={0}
      >
        {title}
      </Text>
      <Text fontSize={['12px', '12px']}>{date}</Text>
    </Box>
  )
}

export default Progress
