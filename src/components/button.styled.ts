import { styled } from 'styled-components'

export type VariantsType = 'default' | 'active'

type ButtonDefaultType = {
  variant?: VariantsType
}

export const ButtonDefault = styled.button<ButtonDefaultType>`
  background-color: ${(props) => props.theme.colors.primary};
  border: 0.5px solid ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  padding: 1px 4px;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
  }
`
