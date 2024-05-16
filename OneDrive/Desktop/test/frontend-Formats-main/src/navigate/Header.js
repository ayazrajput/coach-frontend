import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../img/logo.png';
import { useNavigate } from "react-router-dom";
import "../components/component.css";
// import { Button } from 'react-bootstrap';

// import './_dark-mode.scss';
// import {FaMoon, FaSun} from "react-icons/fa";

const Header = ({currentUser, showModeratorBoard, showAdminBoard, logOut}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const mode = window.localStorage.getItem('mode');
      const root = document.getElementsByTagName('html')[0];
  
      if (mode !== undefined && mode === 'dark') {
        setIsDarkMode(true);
        root.classList.add('dark-mode');
      } else {
        setIsDarkMode(false);
        root.classList.remove('dark-mode');
      }
    }, []);

    const toggleTheme = () => {
      const root = document.getElementsByTagName('html')[0];
  
      if (isDarkMode) {
        window.localStorage.setItem('mode', 'light');
        setIsDarkMode(false);
        root.classList.remove('dark-mode');
      } else {
        window.localStorage.setItem('mode', 'dark');
        setIsDarkMode(true);
        root.classList.add('dark-mode');
      }
      setIsDarkMode(!isDarkMode);
    };

    // const handleSwitcherClick = () => {
    //   toggleTheme();
    // };
  
    const menuSwitch = (
      <label className="form-check-label" htmlFor="theme-mode">
      <i className="ai-moon text-info h3" onClick={() => setIsDarkMode(isDarkMode)}> </i>
      </label>
      
    );

    const lightSwitch = (
      <label className="form-check-label" htmlFor="theme-mode">
      <i className="ai-sun text-success h3" onClick={() => setIsDarkMode(!isDarkMode)} > </i>
      </label>
    );

    const navigate = useNavigate();
    const handleClick = () => {
        logOut();
        navigate("/");
      //   localStorage.clear();
    }

    return ( 
        <>
        {/* <div className="page-wrapper">  */}

         {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navL fixed-top mb-3 bg-primary">
          <Container fluid>
             <Navbar.Brand className="text-success" href="/">
              <p className="m-2"> <img src={logo} alt="logo" style={{ maxWidth: "50px"}} /></p>
              Форматы
            </Navbar.Brand>
           
            <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto dark-mode">
         
         <label className="" onClick={() => toggleTheme()}>
              {isDarkMode ? menuSwitch : lightSwitch}
            </label>
                
          {/* <input
            className="form-check-input"
            type="checkbox"
            id="theme-switcher"
            checked={isDarkMode}
            onChange={handleSwitcherClick}
          /> 
          
          <label className="form-check-label" htmlFor="theme-switcher">
            {isDarkMode ? <i className="ai-moon text-dark display-6"> </i> : <i className="ai-sun text-warning display-6"> </i>}
          </label> */}
         {/* <FaSun className={`text-warning display-6 ${isDarkMode ? 'sun-hidden' : ''}`} />
          <label className="form-check-label" htmlFor="theme-switcher">
            <input
              className="form-check-input"
              type="checkbox"
              id="theme-switcher"
              checked={isDarkMode}
              onChange={handleSwitcherClick}
            />
            <span className="slider"></span>
            <span className={`switcher-label ${isDarkMode ? 'moon-label' : 'sun-label'}`}>
              {isDarkMode ? 'Moon' : 'Sun'}
            </span>
          </label>
          <FaMoon className={`text-dark display-6 ${isDarkMode ? '' : 'moon-hidden'}`} /> */}
      
            </div>
            {/* <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto" databstoggle="mode">
              <input
                className="form-check-input"
                type="checkbox"
                id="theme-mode"
                checked={isDarkMode}
                onChange={toggleTheme}
              />
      <label className="form-check-label" htmlFor="theme-mode">
        <i className={`ai-sun fs-lg text-light ${isDarkMode ? 'moon-offset' : ''}`}></i>
      </label>
      <label className="form-check-label" htmlFor="theme-mode">
        <i className={`ai-moon fs-lg text-dark ${isDarkMode ? 'sun-offset' : ''}`}></i>
      </label>
    </div> */}
            <Navbar.Toggle
             aria-controls={`offcanvasNavbar-expand-${expand}`} 
             className="navbar-toggler bg-success m-2 rounded"
             />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              ariaLabelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
             
              <Offcanvas.Header className="bg-danger" closeButton>
                <Offcanvas.Title className="text-success"  id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Наши Форматы
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body className="bg-primary text-light">
                <Nav className="justify-content-end flex-grow-1 pe-3 text-light ml-auto"  >
                  <NavDropdown 
                    title="О нас"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/aboutus">Наша Команда
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/pay">Реквизиты компании
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/contact">Контакты
                     </NavDropdown.Item>
                  </NavDropdown>
                 
                  <NavDropdown
                    title="Детские ФОРМАТЫ"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/english">Английский язык
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/class">Рисование/лепка
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/chest">Шахматы
                     </NavDropdown.Item>
                     <NavDropdown.Item href="/design"> Графический Дизайн
                     </NavDropdown.Item>
                     {/* <NavDropdown.Item href="/music">Музыкальное направление
                     </NavDropdown.Item> */}
                    <NavDropdown.Item href="/prof">Профориентация
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/vacation">Полезные каникулы
                     </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Взрослые ФОРМАТЫ"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/family">Семейный коучинг
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/personal">Личностный рост
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/manage">Управленческий коучинг
                     </NavDropdown.Item>
                     <NavDropdown.Item href="/women">Женский клуб Women_art_trick
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/niceage">Клуб «Приятный возраст»
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/travel">Психологический туризм
                     </NavDropdown.Item>
                     <NavDropdown.Item href="/englishadult">Английский язык
                     </NavDropdown.Item>
                  </NavDropdown>
{/* 
                  <NavDropdown
                    title="ФОРМАТЫ Бизнеса"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/group">Групповой Коуч
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/team">Командный Коуч
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/corporate">Корпоративный Коуч
                     </NavDropdown.Item>
                     <NavDropdown.Item href="/testing">Групповое Тестирование
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/business">Бизнес Тренинги
                     </NavDropdown.Item>
                  </NavDropdown> */}

                  <NavDropdown
                    title="Публикации"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/promo">Система лояльности
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/publications">Блог & Новости
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/photos">Фото & Видео
                     </NavDropdown.Item>
                  </NavDropdown>
                  <div className="navbar-nav mr-auto">
          
          {showModeratorBoard && (
            <Nav.Link href="/mod">Moderator Board</Nav.Link>
          )}

          {showAdminBoard && (
            <Nav.Link href="/admin">Admin Board</Nav.Link>
          )}

          {currentUser && (
            <Nav.Link href="/user">Личный кабинет</Nav.Link>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <Nav.Link href="/profile">{currentUser.username}</Nav.Link>
            <Nav.Link href="/" onClick={handleClick}>Выйти</Nav.Link>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <Nav.Link href="/login" className="nav-link text-success">Зайти</Nav.Link>
            <Nav.Link href="/register" className="nav-link text-success">Создать Аккаунт </Nav.Link>
          </div>
        )}

            </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
            
          </Container>
        </Navbar>
      ))}

        </>
        // </div>
    )

}

export default Header;