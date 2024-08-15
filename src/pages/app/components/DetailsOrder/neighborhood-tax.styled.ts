import styled from 'styled-components'

export const NeighborhoodTaxContainer = styled.div`
  width: 100%;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TaxValue = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`
