import { Ellipsis, Heart, LayoutDashboard, ReceiptText } from 'lucide-react'
import { FooterContainer, LinkApp, NotifyOrderCount } from './footer.styled'
import { useParams } from 'react-router-dom'
import { UseAppContext } from '../../../../context/use.app.context'

export function Footer() {
  const { company } = useParams()
  const { itensOrder } = UseAppContext()

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
        {itensOrder.length > 0 && (
          <NotifyOrderCount>{itensOrder.length}</NotifyOrderCount>
        )}
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
