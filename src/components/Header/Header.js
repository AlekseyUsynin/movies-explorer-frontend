// компонент, который отрисовывает шапку сайта на страницу.

import React from 'react';
import Navigation from '../Navigation/Navigation'
import './Header.css';
import { Link } from 'react-router-dom';


function Header({ isMain }) {

  // const [isClick, setIsClick] = useState(true);

  // function handleOpen() {
  //   setIsClick(true);
  // }

  // function handleClose() {
  //   setIsClick(false);
  // }

  return (
    <div className={`header ${isMain ? 'header_blue' : ''}`}>
      <div className='header__head'>
        <Link to='/' className='header__logo'></Link>
          {isMain && 
            <>
              <div className='navigation__auth-container'>
                <Link to='/signup' className='navigation__register'>Регистрация</Link>
                <Link to='/signin' className='navigation__login'>Войти</Link>
              </div> 
            </>
          }
      </div>
      <Navigation 
        isMain={isMain}
      /> 
    </div>
  )
}

export default Header;
