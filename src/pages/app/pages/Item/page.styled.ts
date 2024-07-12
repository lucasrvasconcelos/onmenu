import { styled } from 'styled-components'

export const ItemDetailsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
`

export const MenuOptionsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 38px 14px;

  & button {
    background-color: transparent;
    line-height: 0%;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.white};
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 2.275);

    &:hover {
      transform: scale(1.06);
    }
  }

  & button > svg {
    padding: 8px;
    transition: none;
  }

  & button > svg:nth-child(2) {
    color: ${(props) => props.theme.colors.danger};
  }
`

export const DetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 12px;

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
      /* overflow: hidden; */
      /* text-overflow: ellipsis; */
      text-align: center;
      flex: 1;
      /* font-weight: bold; */
    }
  }

  & div img {
    max-width: 320px;
    animation: animateItem 3s linear infinite alternate;
    position: relative;
  }

  & div {
    margin-top: 40px;
    border-radius: 0px 0px 40px 40px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 15px;
      bottom: -9px;
      left: 0;
      right: 0;
      background-color: ${(props) => props.theme.colors.border};
      border-radius: 100%;
      filter: blur(2px);
      transform: scaleX(70%);
      animation: animateShadowItem 3s linear infinite alternate;
    }
  }

  @keyframes animateShadowItem {
    to {
      transform: scaleX(90%);
      filter: blur(5px);
    }
  }

  @keyframes animateItem {
    from {
      transform: translateY(15px);
    }
  }
`
