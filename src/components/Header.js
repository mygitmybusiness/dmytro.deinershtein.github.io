// src/components/Header.js
import Logo from './header/Logo';
import Menu from './header/Menu';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className="header-logo-wrapper">
        <Logo type='text' />
      </div>
      <div className="header-menu">
        <Menu />
      </div>
      <div className="header-links"></div>
    </div>
  )
}

export default Header;
