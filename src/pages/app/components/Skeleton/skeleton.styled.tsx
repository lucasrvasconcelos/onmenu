import styled from 'styled-components'

interface SkeletonProps {
  width: string
  height: string
  animationVelocity?: number
  padding?: string
  margin?: string
  flex?: string
}

export const Skeleton = styled.div<SkeletonProps>`
  content: ' ';
  user-select: none;
  display: flex;
  gap: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};

  padding: ${(props) => (props.padding ? props.padding : '10px')};
  cursor: pointer;
  opacity: 1;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.border};
  animation: skeletonAnimate ease-in-out
    ${(props) => (props.animationVelocity ? props.animationVelocity : '0.5s')}
    alternate infinite;

  @keyframes skeletonAnimate {
    from {
      opacity: 0.8;
    }
  }

  @media (min-width: 400px) {
    flex: ${(props) => props.flex};
  }
`

interface SkeletonGroupProps {
  display: 'flex'
  flexDirection?: 'row' | 'column'
  justify?: string
  align?: string
  gap?: string
  nowrap?: string
}

export const SkeletonGroup = styled.div<SkeletonGroupProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.nowrap};
  flex-wrap: nowrap;
  padding: 20px;
`
