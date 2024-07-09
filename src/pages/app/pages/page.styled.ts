import { styled } from 'styled-components'

export const ItemDetailsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
`

export const MenuOptionsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 38px 14px;

  & > svg {
    background-color: ${(props) => props.theme.colors.white};
    padding: 4px;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  & > svg:nth-child(2) {
    color: ${(props) => props.theme.colors.attention};
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
      border: 0.5px solid ${(props) => props.theme.colors.text};
      color: ${(props) => props.theme.colors.text};
      border-radius: 4px;
      user-select: none;
      /* overflow: hidden; */
      /* text-overflow: ellipsis; */
      text-align: center;
      flex: 1;
      font-weight: bold;
    }
  }

  & img {
    max-width: 320px;
    animation: animateItem 5s linear infinite alternate;
  }

  @keyframes animateItem {
    from {
      transform: translateY(15px);
    }
  }
`
