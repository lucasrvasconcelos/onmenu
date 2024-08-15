import styled from 'styled-components'

export const UpdateOrderPendingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.textSecondary};
  background-color: ${(props) => props.theme.colors.textHighlight};
  padding: 12px 18px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 320px;
  max-height: 320px;
  overflow: hidden;

  animation-duration: 600ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-name: slideUpAndFade;
  will-change: transform, opacity;

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const UpdateOrderPendingLegth = styled.span`
  color: white;
  text-align: center;
  padding: 0px 4px;
  font-weight: bold;
  font-size: 10px;
  border-radius: 40%;
  line-height: normal;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.yellow};
  position: absolute;
  display: flex;
  top: -5px;
  transform: translateX(13px);
`
