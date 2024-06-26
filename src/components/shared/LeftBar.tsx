import { sidebarLinks } from '@/constants'
import { useUserContext } from '@/context/useContext'
import { useSignOutAccount } from '@/lib/react-query/queries'
import { INavLink } from '@/types'
import { useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '../ui/badge'

const LeftBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { user, setIsAuthenticated } = useUserContext()
  const { mutateAsync: signOutAccount, isSuccess } = useSignOutAccount(() => setIsAuthenticated(false))

  useEffect(() => {
    if (isSuccess) navigate(0)
  }, [isSuccess])

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11 ">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>
        <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
          <img
            src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">@{user.username}</p>
          </div>
        </Link>
        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${isActive && "bg-primary-500"
                  }`}>
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${isActive && "invert-white"
                      } h-6 w-6`}
                  />
                  {link.label} {link.label === 'Messenger' && <Badge variant="outline">12</Badge>}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      <Button
        className="shad-button_ghost "
        variant={"ghost"}
        onClick={() => signOutAccount(setIsAuthenticated(false))}
      >
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className='small-medium lg:base-medium '>Log out</p>
      </Button>
    </nav>
  )
}

export default LeftBar