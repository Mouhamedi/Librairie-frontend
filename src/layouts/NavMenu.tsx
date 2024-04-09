import { Book, BookCheck, BookOpenText, LucideIcon, User } from "lucide-react";
import { NavLink } from "react-router-dom";

type NavProps = {
    id: string;
    name: string;
    to: string;
    icon: LucideIcon;
}

const menus: NavProps[] = [
    {
        id: 'adherents',
        name: 'Adherents',
        to: "/adherents",
        icon: User,
    },
    {
        id: 'oeuvres',
        name: 'Oeuvres',
        to: "/oeuvres",
        icon: Book,
    },
    {
      id: 'emprunt',
      name: 'Emprunt',
      to: "/emprunt",
      icon: BookOpenText,
  },
  {
    id: 'reservation',
    name: 'Reservation',
    to: "/reservation",
    icon: BookCheck,
},
]

const NavMenu = () => {
  return (
    <div className="flex flex-col h-full max-h-screen">
      <div className="flex h-14 items-center gap-4 border-b px-4 lg:h- [60px] lg:px-6">
        <BookOpenText className="size-6" />
        <span>Biblio WF</span>
      </div>
      
      <div className="flex-1">
        <nav>
            <ul>
                {menus.map((menu) => (
                    <li key={menu.id} >
                        <NavLink to={menu.to} 
                        className={({isActive}) => `flex gap-4 p-3 items-center hover:text-primary hover:bg-muted ${
                          isActive ? "text-primary bg-muted" : undefined
                          }`
                         }
                        >
                          <menu.icon className="size-4" />
                          <span>{menu.name}</span>
                        </NavLink>
                    </li>
                ))

                }
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavMenu
