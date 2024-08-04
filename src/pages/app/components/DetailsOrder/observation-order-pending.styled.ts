import styled from 'styled-components'

export const ObservationOrderPendingOverlay = styled.div`
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
export const ObservationOrderPendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 8px 18px;
  border-radius: 4px;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-transform: lowercase;
    font-size: 14px;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`

export const ObservationOrderPendingInput = styled.textarea`
  padding: 4px 4px;
  width: 100%;
  height: 100px;
  resize: none;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  margin: 18px 0;
  padding: 8px 8px;
`

export const ObservationOrderPendingAction = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  & button {
    background-color: transparent;
    padding: 2px 8px;
    border: none;
    cursor: pointer;
    border-radius: 4px;

    &:nth-child(1) {
      font-weight: bold;
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
    }
  }
`
