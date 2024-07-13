import { Ellipsis, Heart, LayoutDashboard, User } from 'lucide-react'
import { FooterContainer, LinkApp } from './footer.styled'
import { useParams } from 'react-router-dom'

export function Footer() {
  const { company } = useParams()

  return (
    <FooterContainer>
      <LinkApp
        to={`/app/${company}`}
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
        to={`/app/${company}/account`}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        <User size={22} />
        <span>Account</span>
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
