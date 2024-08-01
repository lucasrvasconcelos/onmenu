import styled from 'styled-components'

export const PopoverContent = styled.div`
  border-radius: 4px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  animation-duration: 600ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-name: slideUpAndFade;
  will-change: transform, opacity;

  & .popoverArrow {
    fill: ${(props) => props.theme.colors.white};
  }

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
export const DeleteOrderAction = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  gap: 6px;
`
