import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const PopularContainer = styled.div`
  margin: 8px;
  min-height: 1000px;

  a {
    font-weight: bold;
    text-transform: uppercase;
  }

  & h3 {
    color: ${(props) => props.theme.colors.white};
    padding: 0px 12px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.primary};
    backdrop-filter: saturate(180%) blur(40px);
    border: 2px solid ${(props) => props.theme.colors.white};
    width: fit-content;
    position: sticky;
    top: 145px;
    margin-left: 20px;
    z-index: 1;
    text-transform: capitalize;
    user-select: none;
    font-size: 16px;
    font-weight: bold;
  }
`

export const PopularItemGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 18px;
  row-gap: 40px;
  margin-bottom: 35px;
  padding: 40px 20px;
  width: 100%;
`

export const PopularItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  flex-direction: column;
  padding: 8px;
  margin-top: 45px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  cursor: pointer;
`

export const ImageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 9px;
  width: 100%;
  height: 180px;
  position: relative;

  & img {
    height: 230px;
    width: 230px;
    object-fit: cover;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 2.275);
    position: absolute;
    bottom: 18px;
    border-radius: 8px;

    &:hover {
      transform: translateY(-5px);
    }
  }
`

export const NameItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 6px;
  gap: 8px;
  position: relative;

  & > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;
  }

  & > span {
    font-weight: bold;
    font-size: 15px;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    margin: 0 8px;
    padding: 0px 8px;
    position: absolute;
    border-radius: 2px;
    top: 9px;
    right: 2px;
  }
`
