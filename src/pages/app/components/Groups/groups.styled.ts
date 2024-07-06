import { styled } from 'styled-components'

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  padding-top: 160px;
  gap: 8px;
  max-width: 100%;
`

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  gap: 20px;
  padding: 8px 4px;
  margin: 8px 2px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.1s linear;
  white-space: nowrap;
  padding-bottom: 18px;
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
    background-color: ${(props) => props.theme.colors.textHighlight};
  }

  &.active > div img {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &.active svg {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
  }
`

export const CategoryImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) =>
    props.theme.colors.placeholder}; // Placeholder for category image
  border-radius: 35%;
  margin-bottom: 10px;
  overflow: hidden;
  padding: 2px;
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
