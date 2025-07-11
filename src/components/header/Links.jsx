const Links = ({type}) => {
    const linksList = [
      {
        label: 'linkedIn',
        href: '/mylinkedin'
      },
      {
        label: 'github',
        href: '/mygithub'
      },
      {
        label: 'e-mail',
        href: '/my-email'
      }
    ];

    return (
      <ul className="links">
        {linksList.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>
                <span>{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
  
  export default Links;