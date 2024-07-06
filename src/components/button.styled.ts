import { styled } from 'styled-components'

export const ButtonDefault = styled.button`
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};
  line-height: 0px;

  border: none;

  width: 35px;
  height: 35px;

  &:focus {
    outline: 0.5px solid grey;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`
