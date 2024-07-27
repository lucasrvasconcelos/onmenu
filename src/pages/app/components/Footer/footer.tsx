import { Ellipsis, Heart, LayoutDashboard, ReceiptText } from 'lucide-react'
import { FooterContainer, LinkApp } from './footer.styled'
import { useParams } from 'react-router-dom'

export function Footer() {
  const { company } = useParams()

  return (
    <FooterContainer>
      <LinkApp
        to={`/app/${company}/home`}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        <LayoutDashboard size={22} />
        <span>Home</span>
      </LinkApp>

      <LinkApp
        to={`/app/${company}/favorites`}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        <Heart size={22} />
        <span>Favorites</span>
      </LinkApp>

      <LinkApp
        to={`/app/${company}/orders`}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        <ReceiptText size={22} />
        <span>Orders</span>
      </LinkApp>

      <LinkApp
        to={`/app/${company}/more`}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        <Ellipsis size={22} />
        <span>More</span>
      </LinkApp>
    </FooterContainer>
  )
}
