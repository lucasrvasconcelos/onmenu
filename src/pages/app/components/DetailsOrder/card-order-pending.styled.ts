import styled from 'styled-components'

export const CardOrderPendingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  margin-bottom: 24px;
`
export const CardOrderPendingImage = styled.img`
  width: 54px;
  object-fit: cover;
  overflow: hidden;
`
export const CardOrderPendingProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const CardOrderPendingNameProduct = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-transform: lowercase;
  font-size: 14px;
`
export const CardOrderPendingActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 8px;
`

interface CardOrderPendingButtonProps {
  variant: 'red' | 'green' | 'blue' | 'yellow'
}
export const CardOrderPendingButton = styled.button<CardOrderPendingButtonProps>`
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    color: ${(props) => {
      switch (props.variant) {
        case 'red':
          return props.theme.colors.red
        case 'green':
          return props.theme.colors.green
        case 'blue':
          return props.theme.colors.blue
        case 'yellow':
          return props.theme.colors.yellow
      }
    }};
  }
`

export const CardOrderPendingButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  padding: 2px 8px;
  border-radius: 4px;

  & span {
    font-weight: 600;
    font-size: 14px;
    width: 20px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const CardOrderPendingPrice = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  color: ${(props) => props.theme.colors.green};
  font-size: 14px;
  width: 100px;
`
