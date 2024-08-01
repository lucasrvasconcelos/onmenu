import styled from 'styled-components'

export const DeleteOrderDialogOverlay = styled.div`
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
  z-index: 1;
`
export const DialogContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  padding: 14px 14px;

  & button {
    outline: none;
    cursor: pointer;
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: bold;
    opacity: 0.5;
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`
export const DeleteOrderAction = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  gap: 6px;
`
export const BtnCancelDeleteOrder = styled.button`
  background-color: ${(props) => props.theme.colors.red};
  border: 1px solid ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
`
export const BtnDeleteOrder = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.textSecondary};
  color: ${(props) => props.theme.colors.textSecondary};
`
