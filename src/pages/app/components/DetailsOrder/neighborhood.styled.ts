import styled from 'styled-components'

export const NeighborhoodTrigger = styled.button`
  all: unset;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 2px 10px ${(props) => props.theme.colors.border};
  border: 1px solid ${(props) => props.theme.colors.primary};
  font-size: 12px;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.black};
  }

  .SelectTrigger[data-placeholder] {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const NeighborhoodContent = styled.div`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);

  & .SelectViewport {
    padding: 5px;
  }
`

export const SelectItem = styled.button`
  font-size: 13px;
  line-height: 1;
  color: var(--violet-11);
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: ${(props) => props.theme.colors.border};
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    background-color: var(--violet-9);
    color: var(--violet-1);
  }
`
