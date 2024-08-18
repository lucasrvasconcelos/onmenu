import { styled } from 'styled-components'

import { MapPin } from 'lucide-react'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding-bottom: 4px;
  border-radius: 0 0 15px 15px;

  z-index: 100;
  background-color: ${(props) => props.theme.colors.background};
`

export const HeaderWrapper = styled.div`
  padding: 22px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > button {
    gap: 8px;
    background-color: ${(props) => props.theme.colors.background};
  }
`
export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 4px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 0px 4px;
  padding-right: 8px;
  border-radius: 4px;

  & > span {
    font-size: 13px;
    font-weight: bold;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.black};
  }
`
export const MapPinIconApp = styled(MapPin)`
  color: ${(props) => props.theme.colors.primary};
  fill: ${(props) => props.theme.colors.primary};

  & > circle {
    fill: ${(props) => props.theme.colors.background};
  }
`

export const DescriptionCompany = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px 0;
  padding-left: 28px;

  & h1 {
    font-size: 24px;
  }

  & p {
    font-size: 14px;
  }
`
