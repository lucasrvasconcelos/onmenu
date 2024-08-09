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

export const ConfirmOrderContainer = styled.form``

export const SearchZipCode = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 4px;
  margin: 8px 0;

  & input {
    font-size: 16px;
    padding: 4px 4px;
    border: 1px solid ${(props) => props.theme.colors.border};
    outline: none;
    border-radius: 4px;
    flex-grow: 2;
    text-align: center;

    &::placeholder {
      text-align: center;
      text-transform: uppercase;
    }
  }

  & button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    outline: none;
    padding: 4px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    flex-grow: 1;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.colors.black};
    }
  }
`

export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`
export const InputItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & label {
    text-align: left;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
  }

  & input {
    width: 100%;
    font-size: 16px;
    padding: 2px 4px;
    border: 1px solid ${(props) => props.theme.colors.border};
    outline: none;
    border-radius: 4px;

    &:focus {
      outline: 1px solid ${(props) => props.theme.colors.black};
    }
  }
`

export const InputItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
