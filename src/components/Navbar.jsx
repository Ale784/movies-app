
import { useState } from 'react'
import menu from '../../public/menu.svg'
import close from '../../public/close.svg'
import { NavBarLinks } from './constants'

const NavBarLink = ({ link, isSelected }) => (
  <a href={`/movies/${link}`}>
    <li>{link}</li>
  </a>
)

export function NavBar () {
  const [toggle, setToggled] = useState(false)

  return (
    <nav className='flex justify-between items-center p-5 cursor-pointer'>
      <a href='/'>
        <h1 className='text-3xl'>Movies</h1>
      </a>

      {/** Desk view */}
      <ul className='sm:flex hidden gap-6 bg-primary_variant p-3 rounded-2xl'>
        {
            NavBarLinks.map((links, key) => (
              <NavBarLink key={key} link={links.link} />
            ))
        }
      </ul>

      {/** Mobile view */}
      <div className='sm:hidden flex items-center'>

        <button onClick={() => setToggled(prev => !prev)}>
          <img
            src={toggle ? close : menu}
            alt=''
            width='30px'
          />

          <ul className={`${toggle ? 'flex' : 'hidden'} flex-col
           text-left bg-surface p-6 absolute top-14 right-6 rounded`}
          >
            {
            NavBarLinks.map((links, key) => (
              <NavBarLink key={key} link={links.link} />
            ))
            }
          </ul>

        </button>
      </div>
    </nav>
  )
}
