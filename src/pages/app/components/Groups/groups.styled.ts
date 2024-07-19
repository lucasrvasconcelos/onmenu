import { styled } from 'styled-components'

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-top: 160px;
  gap: 8px;
  width: 100%;
  position: relative;
`

export const CleanFilters = styled.button`
  position: absolute;
  top: -10px;
  left: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  padding: 2px 12px;
  padding-right: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.opacity};
  backdrop-filter: saturate(180%) blur(40px);
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.colors.danger};
  }

  & svg {
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.danger};
  }
`

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  gap: 20px;
  padding: 18px 4px;
  margin: 8px 2px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.1s linear;
  white-space: nowrap;
  user-select: none;

  &:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
  }

  & svg {
    background-color: ${(props) => props.theme.colors.black};
    border-radius: 50%;
    padding: 2px;
    color: ${(props) => props.theme.colors.white};
    transition: all 0.1s linear;
  }

  & span {
    padding: 0px 2px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.active {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }

  &.active > div {
    background-color: ${(props) => props.theme.colors.white};
  }

  &.active > div img {
  }

  &.active svg {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
  }
`

export const CategoryImage = styled.div`
  width: 70px;
  height: 70px;

  border-radius: 15%;
  overflow: hidden;
  transition: all 0.1s linear;

  & img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    display: flex;
    object-fit: cover;
    transition: all 0.1s linear;
  }
`
