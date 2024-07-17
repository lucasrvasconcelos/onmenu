import { styled } from 'styled-components'

export const SearchContainer = styled.div`
  padding: 4px 20px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => props.theme.colors.placeholder};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  outline: none;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: bold;
  position: relative;

  &::placeholder {
    font-weight: normal;
  }

  &:focus {
    color: ${(props) => props.theme.colors.black};
  }
`
