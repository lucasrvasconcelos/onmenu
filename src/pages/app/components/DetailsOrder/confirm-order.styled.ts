import styled from 'styled-components'

export const ConfirmOrderDialogOverlay = styled.div`
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
  z-index: 100;
`

export const ConfirmOrderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  padding: 8px 10px;
`

export const ConfirmOrderContainer = styled.div``

export const SearchZipCode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 8px;

  & input {
    font-size: 16px;
    padding: 2px 4px;
    border: 1px solid ${(props) => props.theme.colors.border};
    outline: none;
    border-radius: 4px;
  }

  & button {
    cursor: pointer;
    background-color: transparent;
    line-height: 0px;
    border: 3px solid ${(props) => props.theme.colors.primary};
    border-radius: 4px;
    outline: none;
    padding: 4px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
