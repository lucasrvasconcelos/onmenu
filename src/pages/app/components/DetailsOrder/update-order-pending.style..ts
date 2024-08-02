import styled from 'styled-components'

export const UpdateOrderPendingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 18px;
  color: ${(props) => props.theme.colors.textSecondary};
  background-color: ${(props) => props.theme.colors.textHighlight};
  padding: 12px 18px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 320px;
`
