import styled from 'styled-components'

export type ButtonOrderType = { variant: 'green' | 'red' | 'yellow' | 'white' }

const ButtonDefault = styled.button<ButtonOrderType>`
  outline: none;
  cursor: pointer;
  padding: 2px 12px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0px;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  flex: 1;
  border: 1px solid;

  &:hover {
    opacity: 1;
  }
`

export const ButtonOrder = styled(ButtonDefault)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 'green':
        return props.theme.colors.green
      case 'red':
        return props.theme.colors.red
      case 'yellow':
        return props.theme.colors.yellow
      case 'white':
        return props.theme.colors.white
    }
  }};

  color: ${(props) => {
    switch (props.variant) {
      case 'green':
        return props.theme.colors.white
      case 'red':
        return props.theme.colors.white
      case 'yellow':
        return props.theme.colors.white
      case 'white':
        return props.theme.colors.text
    }
  }};

  border-color: ${(props) => {
    switch (props.variant) {
      case 'green':
        return props.theme.colors.green
      case 'red':
        return props.theme.colors.red
      case 'yellow':
        return props.theme.colors.yellow
      case 'white':
        return props.theme.colors.white
    }
  }};
`
