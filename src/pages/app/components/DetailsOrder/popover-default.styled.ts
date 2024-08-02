import styled from 'styled-components'

import * as Popover from '@radix-ui/react-popover'

export const PopoverArrow = styled(Popover.Arrow)`
  fill: ${(props) => props.theme.colors.white};
`
