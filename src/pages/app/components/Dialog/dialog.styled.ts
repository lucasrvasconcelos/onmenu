import styled from 'styled-components'

export const DialogOverlay = styled.div`
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

export const DialogContent = styled.div`
  max-width: 320px;
  background: white;
  padding: 30px;
  border-radius: 4px;
  position: relative;

  & h2 {
    color: ${(props) => props.theme.colors.black};
    font-size: 22px;
  }

  & p {
    font-size: 14px;
    margin-top: 4px;
    color: ${(props) => props.theme.colors.black};
  }

  @media (min-width: 600px) {
    max-width: none;
    width: 500px;
  }
`
export const ObservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 12px;
  font-weight: 500;
  & div {
    font-size: 12px;
    text-transform: lowercase;
    & span {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  & textarea {
    padding: 4px 4px;
    width: 100%;
    height: 100px;
    resize: none;
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 4px;
  }
`
export const DialogButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
`

export const SaveObservation = styled.button`
  border-radius: 4px;
  padding: 2px 12px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 8px;
  right: 0;
  &:hover {
    opacity: 0.9;
  }
`

export const DiscartChange = styled.button`
  border-radius: 4px;
  padding: 2px 12px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 8px;
  font-weight: 500;
  right: 0;
  &:hover {
    opacity: 0.9;
  }
`

export const CountObservation = styled.span`
  position: absolute;
  bottom: 38px;
  left: 35px;
  font-size: 12px;
  font-weight: normal;
`
