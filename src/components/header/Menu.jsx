import { useState } from 'preact/hooks';

const Menu = ({type}) => {
    const menuLinks = [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Portfolio',
        href: '/portfolio'
      },
      {
        label: 'Contact',
        href: '/contact'
      }
    ];

    const [open, setOpen] = useState(false);

    return (
      <ul className={`menu ${open ? 'open' : ''}`} onClick={() => setOpen(prev => !prev)}>
        {menuLinks.map((item, index) => {
          return (
            <li key={index} className="button">
              <a href={item.href}>
                <span>{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>      
    )
  }
  
  export default Menu;
