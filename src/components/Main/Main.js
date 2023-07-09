// компонент страницы «О проекте». Он будет содержать только презентационные компоненты и в будущем, за исключением шапки навигации. Вот так выглядит список компонентов, которые будут использоваться только на этой странице:
// + Promo — компонент с вёрсткой баннера страницы «О проекте».
// (нет в макете) NavTab — компонент с навигацией по странице «О проекте».
// + AboutProject — компонент с описанием дипломного проекта.
// + Techs — компонент с использованными технологиями.
// + AboutMe — компонент с информацией о студенте.
// + Portfolio — компонент со ссылками на другие проекты.
// + Header — компонент, который отрисовывает шапку сайта на страницу.
// + Navigation — компонент, который отвечает за меню навигации на сайте.
// + Footer — презентационный компонент, который отрисовывает подвал.

import React, { useState, useEffect } from 'react';
import './Main.css';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';

function Main() {
  const [isMain, setIsMain] = useState(false)

  useEffect(() => {
    setIsMain(true)
    return () => {
      setIsMain(false)
    }
  }, [])


  return (
    <>
      <Header isMain={isMain}/>
      <main className='main'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main;
