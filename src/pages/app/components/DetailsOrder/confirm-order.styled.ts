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
