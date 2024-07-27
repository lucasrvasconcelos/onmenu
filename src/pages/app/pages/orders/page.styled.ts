import styled from 'styled-components'

export const OrdersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
`

export const OrdersPending = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > span {
    width: 100%;
    text-align: left;
    font-weight: bold;
  }
`

export const OrderItemPending = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 18px;
  margin-top: 15px;
  color: ${(props) => props.theme.colors.textSecondary};
  padding: 12px 18px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  min-width: 320px;
`

export const OrderItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  & span:nth-child(2) {
    color: ${(props) => props.theme.colors.black};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 180px;
    font-weight: bold;
    font-size: 16px;
  }

  & span:nth-child(3) {
    font-size: 10px;
    margin-top: 2px;
  }

  & span:nth-child(4) {
    text-align: let;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.green};
  }
`

export const OrderStatus = styled.span`
  position: absolute;
  top: -18px;
  left: -3px;
  font-size: 10px;
  width: fit-content;
  color: ${(props) => props.theme.colors.green};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 0px 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  line-height: 14px;
  font-weight: bold;
  letter-spacing: 0.5px;
`

export const OrderButtonAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

interface ButtonActionProps {
  status: 'pending' | 'cancel' | 'finish'
}

export const ButtonAction = styled.button<ButtonActionProps>`
  display: block;
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  line-height: 0px;
  cursor: pointer;

  color: ${(props) => {
    switch (props.status) {
      case 'pending':
        return props.theme.colors.yellow
      case 'cancel':
        return props.theme.colors.red
      case 'finish':
        return props.theme.colors.green
    }
  }};
  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`
