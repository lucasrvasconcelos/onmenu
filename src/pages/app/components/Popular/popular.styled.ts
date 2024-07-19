import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const PopularContainer = styled.div`
  margin: 8px;

  a {
    font-weight: bold;
    text-transform: uppercase;
  }

  & h3 {
    color: ${props => props.theme.colors.primary};
    padding: 0px 12px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.textHighlight};
    backdrop-filter: saturate(180%) blur(40px);
    border: 2px solid ${props => props.theme.colors.primary};
    width: fit-content;
    position: sticky;
    top: 155px;
    margin-left: 20px;
    z-index: 1;
  }
`

export const GroupPopular = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 35px;
  padding: 18px;
  position: relative;

  & a {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -1px;
  }
  
`
export const PopularItemGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 18px;
  margin-bottom: 35px;
  padding: 0px 20px;
  width: 100%;
`

export const PopularItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  max-width: 320px;
  flex-direction: column;
  padding: 8px;
  margin-top: 45px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  cursor: pointer;
  flex: 1;
`

export const ImageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 9px;
  padding-bottom: 10px;
  width: 100%;

  & img {
    margin-top: -50px;
    max-width: 320px;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 2.275);

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
// export const Ingredients = styled.div`
//   display: flex;
//   justify-content: space-between;
//   color: ${(props) => props.theme.colors.textSecondary};
//   text-transform: capitalize;
//   margin-top: 12px;

//   & div {
//     padding: 0px 2px;
//   }
// `

// export const IngredientsName = styled.span`
//   font-size: 10px;
//   /* margin-left: 3px; */
//   background-color: ${(props) => props.theme.colors.placeholder};
//   border: 0.5px solid ${(props) => props.theme.colors.textSecondary};
//   border-radius: 4px;
//   user-select: none;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `
