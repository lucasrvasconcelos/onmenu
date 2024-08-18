import styled from 'styled-components'

export const NeighborhoodTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 4px;
  font-size: 10px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  width: 138px;
  background-color: ${(props) => props.theme.colors.white};
  border: 0.5px solid ${(props) => props.theme.colors.border};
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;

  &.required {
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    box-shadow: 0 0 0 0.5px ${(props) => props.theme.colors.border};
  }

  & span {
    padding: 0px 9px;
  }

  & span:nth-child(1) {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .SelectTrigger[data-placeholder] {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const NeighborhoodContent = styled.div`
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  z-index: 10;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.55),
    0px 10px 20px -15px rgba(22, 23, 24, 0.6);

  & .SelectViewport {
    padding: 5px;
  }

  & .arrow {
    fill: ${(props) => props.theme.colors.white};
  }
`

export const SelectItem = styled.button`
  font-size: 13px;
  line-height: 1;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 18px 8px 25px;
  position: relative;
  user-select: none;
  border: none;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;

  & span {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &[data-disabled] {
    color: ${(props) => props.theme.colors.border};
    pointer-events: none;
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.colors.placeholder};
  }

  &[data-highlighted] {
    outline: none;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};

    & span {
      color: ${(props) => props.theme.colors.white};
    }
  }
`

export const NeighborhoodTaxPrice = styled.span`
  top: 2px;
  right: 8px;
  font-size: 10px;
  padding: 4px;
  padding-left: 8px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.red};
  font-weight: bold;
`

export const SelectItemIndication = styled.div`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const NotFoundNeighborhood = styled.span`
  outline: none;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
  font-weight: bold;
  cursor: not-allowed;
  border-radius: 4px;
  padding: 0 4px;
`
