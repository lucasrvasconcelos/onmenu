import { styled } from 'styled-components'

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  gap: 2px;
  position: absolute;
  margin-top: 2px;

  background-color: ${(props) => props.theme.colors.background};
`

export const DropDownButton = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  text-align: left;
  flex-grow: 1;
  width: 100%;
  border: none;
  padding: 0px 2px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textHighlight};
  }
`
