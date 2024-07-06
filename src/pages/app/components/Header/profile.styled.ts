import { styled } from 'styled-components'

export const ProfileImage = styled.div`
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 35%;
  background-color: ${(props) => props.theme.colors.primary};
`
