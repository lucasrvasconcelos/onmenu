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
