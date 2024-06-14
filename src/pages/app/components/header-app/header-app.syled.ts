import { styled } from 'styled-components'

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
