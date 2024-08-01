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

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 320px;
  }

  & > div > span {
    text-align: left;
    font-weight: bold;
  }
`

export const NotFindOrders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;

  & span {
    font-weight: 300 !important;
  }
`
