import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 10px 8px;
`

export const LinkApp = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  font-size: 12px;
  position: relative;

  text-decoration: none;

  color: ${(props) => props.theme.colors.textSecondary};

  &.active {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }
`
export const NotifyOrderCount = styled.span`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  height: 14px;
  padding: 0px 4px;
  font-weight: bold;
  font-size: 10px;
  border-radius: 40%;
  overflow: hidden;

  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  top: -5px;
  transform: translateX(8px);
`
