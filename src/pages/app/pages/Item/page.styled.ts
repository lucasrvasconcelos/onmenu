import { styled } from 'styled-components'

export const ItemDetailsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 45px;
`

export const MenuOptionsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 38px 14px;
  position: fixed;
  top: 0;
  width: 100%;

  & button,
  & a {
    background-color: transparent;
    line-height: 0%;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 2.275);
    position: relative;

    &:hover {
      transform: scale(1.06);
    }

    & svg {
      padding: 8px;
      transition: none;
    }
  }

  & button > svg {
    /* background-color: ${(props) => props.theme.colors.danger}; */
    color: ${(props) => props.theme.colors.danger};
  }
`

export const ItemOrderLength = styled.span`
  position: absolute;
  top: -5px;
  right: 8px;

  color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding: 0px 4px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 40%;
  line-height: normal;
  background-color: ${(props) => props.theme.colors.primary};
  transform: translateX(13px);
`

export const DetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 12px;

  & h1 {
    text-transform: capitalize;
    text-align: center;
    font-size: 24px;
  }

  @media (min-width: 400px) {
    & h1 {
      font-size: 30px;
    }
  }

  & ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3px;
    margin-top: 15px;

    & li {
      font-size: 10px;
      padding: 0px 12px;
      background-color: ${(props) => props.theme.colors.white};
      border: 0.5px solid ${(props) => props.theme.colors.border};
      color: ${(props) => props.theme.colors.text};
      border-radius: 4px;
      user-select: none;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      max-width: 200px;
      text-overflow: ellipsis;
      flex: 1;
      text-transform: lowercase;
    }
  }
`

export const ImageItem = styled.div`
  margin-top: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 15px;
    bottom: -16px;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${(props) => props.theme.colors.border};
    border-radius: 100%;
    filter: blur(3px);
    transform: scaleX(70%);
    animation: animateShadowItem 3s linear infinite alternate;
  }

  & img {
    max-width: 320px;
    height: 200px;
    animation: animateItem 3s linear infinite alternate;
    position: relative;
  }

  @keyframes animateShadowItem {
    to {
      transform: scaleX(110%);
      filter: blur(5px);
    }
  }

  @keyframes animateItem {
    from {
      transform: translateY(15px);
    }
  }
`
export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: stretch;

  gap: 25px;
  margin-top: 18px;
`

export const ItensControl = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 22px;
  flex-direction: row;
`
export const Observation = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  font-size: 16px;
  border-radius: 4px;
  text-transform: capitalize;
  user-select: none;
  cursor: pointer;
`
export const SetQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  gap: 2px;

  & button {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
    border: none;
    font-size: 30px;
    border-radius: 4px;

    line-height: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  & span {
    width: 70px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
`

export const CartApp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 1;
  bottom: 0;
  width: 100%;
  padding: 8px 15px;
  padding-bottom: 12px;

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    & h4 {
      font-size: 14px;
      color: ${(props) => props.theme.colors.primary};
      letter-spacing: 1px;
    }

    & span {
      font-size: 25px;
      font-weight: bold;
    }
  }
`
export const AddItemButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 8px 34px;
  border-radius: 6px;
  border: 0.5px solid ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 15px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
`
