import { Ellipsis, Heart, LayoutDashboard, ReceiptText } from 'lucide-react'
import { FooterContainer, LinkApp, NotifyOrderCount } from './footer.styled'
import { UseAppContext } from '../../../../context/use.app.context'
import { useParams } from 'react-router-dom'

export function Footer() {
  const { itensOrder } = UseAppContext()

  const { companytag } = useParams<{ companytag: string }>()

  return (
    <FooterContainer>
      <LinkApp
        to={`/app/${companytag}/home`}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        <LayoutDashboard size={22} />
        <span>Home</span>
      </LinkApp>

      <LinkApp
        to={`/app/${companytag}/favorites`}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        <Heart size={22} />
        <span>Favorites</span>
      </LinkApp>

      <LinkApp
        to={`/app/${companytag}/orders`}
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
        to={`/app/${companytag}/more`}
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
