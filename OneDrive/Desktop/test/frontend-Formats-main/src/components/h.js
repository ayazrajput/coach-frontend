import React , { Component } from "react";

import UserService from "../services/user.service";
import "./component.css"
import { register } from 'swiper/element/bundle';
register();

export default class H extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      // <div className="container">
      <div>
        <body>
        {/* <header className="jumbotron"> */}
          {/* <h3>{this.state.content}</h3> */}
        {/* </header> */}
        <main className="page-wrapper">
         <section className="jarallax min-vh-100 py-lg-3 py-xl-4 py-xxl-5" data-jarallax data-speed="0.65">
        <div className="jarallax-img"  style={{backgroundImage: 'url(assets/img/landing/corporate/hero-bg.jpg)'}}></div>
        <div className="container-fluid position-relative zindex-2 py-5 my-md-3 my-lg-5">
        <div className="row pb-3 pt-4 pt-sm-5">
            <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5 offset-lg-1 pt-5">
            <div className="card dark-mode border-0 rounded-1 py-2 py-sm-3 py-md-4 bg-primary" 
            // style={{backgroundColor: '#004655'}}
            >
                <div className="card-body">
                <div className="mx-auto pt-2" style={{maxWidth: '535px'}}>
                    <h1 className="display-5 mb-4">За эффективным решением свяжитесь с нами </h1>
                    <p className="fs-lg pb-4 pb-lg-5 mb-2" style={{maxWidth: '410px'}}>Забронируйте бесплатную консультацию.</p>
                    <div className="d-flex flex-column flex-sm-row align-items-center pb-lg-2">
                    <a className="btn btn-lg btn-light w-100 w-sm-auto me-sm-3 mb-3 mb-sm-0" href="/">Телефон Центра</a>
                    <a className="d-flex align-items-center fw-semibold text-white text-decoration-none px-3 py-2" href="tel:+7(992)300-65-46"><i className="ai-phone fs-xl me-2"></i>+7(992)300-65-46</a></div>
                    <ul className="list-unstyled d-sm-flex mb-0 pt-4 pt-sm-5 mt-lg-2 mt-xl-4">
                    <li className="d-flex mb-2 mb-sm-0 pe-sm-1 me-sm-3"><i className="ai-check-alt text-white fs-4 mt-n1 me-2"></i>Полный спектр услуг</li>
                    <li className="d-flex"><i className="ai-check-alt text-white fs-4 mt-n1 me-2"></i>Гибкие часы работы</li>
                    <li className="d-flex"><i className="ai-check-alt text-white fs-4 mt-n1 me-2"></i>Многопрофильный центр</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* Services*/}
    <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <h3 className="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">
            На сегодняшний день «Форматы» — это атмосферный Центр развития личности для тех, кто развивает себя вместе с близкими.
        </h3>
        <h5 className="text-center pb-3 mb-3 mb-lg-4">
           Наш Центр: 
           <br></br> Гибкое и удобное пространство для развития потенциала личности
           <br></br> Развитие и поддержка навыков детей и взрослых
           <br></br>  Поддержка и помощь в развитии/масштабировании бизнеса юридических лиц
        </h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {/* Item*/}
        <div className="col"><a className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/">
            <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4" style={{backgroundImage: 'url(assets/img/landing/corporate/services/01.jpg'}}>
                <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div>
            </div>
            <div className="card-body pb-3">
                <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <g className="text-info">
                    <path d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z" fill="currentColor"></path>
                </g>
                <g className="text-primary">
                    <path d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z" fill="currentColor"></path>
                </g>
                </svg>
                <h3 className="h4">Детские ФОРМАТЫ</h3>
                <ul className="mb-0">
                <li> Английский язык (7+)</li>
                <li> Рисование/лепка (5+)</li>
                <li> Шахматы (5+)</li>
                <li> Музыкальное направление (5+)</li>
                <li> Профориентация (12+)</li>
                <li> Полезные каникулы (7+)</li>
                </ul>
            </div>
            <div className="card-footer border-0 pt-3 mb-3">
                <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
            </div></a></div>
        {/* Item*/}
        <div className="col"><a className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/">
            <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4" style={{backgroundImage: 'url(assets/img/landing/corporate/services/02.jpg)'}}>
                <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div>
            </div>
            <div className="card-body pb-3">
                <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <g className="text-info">
                    <path d="M25,25h15v15H25V25z" fill="currentColor"></path>
                </g>
                <g className="text-primary">
                    <path d="M10,20c0-5.5,4.5-10,10-10s10,4.5,10,10h10C40,9,31,0,20,0S0,9,0,20s9,20,20,20V30C14.5,30,10,25.5,10,20z" fill="currentColor"></path>
                </g>
                </svg>
                <h3 className="h4">Взрослые ФОРМАТЫ</h3>
                <ul className="mb-0">
                    <li>Семейный коучинг</li>
                    <li>Личностный рост</li>
                    <li>Управленческий коучинг</li>
                    <li>Женский клуб Women_art_trick</li>
                    <li>Клуб «Приятный возраст» (55+)</li>
                    <li>Психологический туризм</li> 
                </ul>
            </div>
            <div className="card-footer border-0 pt-3 mb-3">
                <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
            </div></a></div>
        {/* Item*/}
        <div className="col"><a className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/">
            <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"  style={{backgroundImage: 'url(assets/img/landing/corporate/services/03.jpg)'}}>
                <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div>
            </div>
            <div className="card-body pb-3">
                <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <g className="text-primary">
                    <path d="M25.2791 12.7502C28.1954 9.83389 28.1954 5.10556 25.2791 2.18921C22.3627 -0.727136 17.6344 -0.727137 14.718 2.18921C11.8017 5.10556 11.8017 9.83389 14.718 12.7502C17.6344 15.6666 22.3627 15.6666 25.2791 12.7502Z" fill="currentColor"></path>
                </g>
                <g className="text-info">
                    <path d="M14.6859 29.3056C15.6559 27.0123 16.9202 24.8838 18.4577 22.9467C13.8666 17.9802 7.29664 14.8701 0 14.8701V40.0004H12.5259C12.5259 36.2925 13.2527 32.6942 14.6859 29.3056Z" fill="currentColor"></path>
                </g>
                <g className="text-primary">
                    <path d="M40.0014 40.0004V14.8701C26.1223 14.8701 14.8711 26.1214 14.8711 40.0004H40.0014Z" fill="currentColor"></path>
                </g>
                </svg>
                <h3 className="h4">ФОРМАТЫ Бизнеса</h3>
                <ul className="mb-0">
                <li>Диагностика вашего Бизнеса</li>
                <li>Систематизация бизнеса</li> 
                <li>Оптимизация бизнес-процессов</li> 
                <li>Бизнес-план</li> 
                <li>СТАРТАП</li> 
                <li>Бизнес-тренинги</li> 
                <li>Командный коучинг</li> 
                <li>Разработка документов</li> 
                <li>Создание отдела продаж</li>
                <li>Аудит продаж</li> 
                <li>Executive коучинг</li>
                <li>Сопровождение в бизнес-проектах </li> 
                <li>Наставничество</li> 
                <li>Тимбилдинг</li> 
                </ul>
            </div>
            <div className="card-footer border-0 pt-3 mb-3">
                <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
            </div></a></div>
        {/* Item*/}
        <div className="col"><a className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/promo">
            <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"  style={{backgroundImage: 'url(assets/img/landing/corporate/services/04.jpg)'}}>
                <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div>
            </div>
            <div className="card-body pb-3">
                <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <g className="text-info">
                    <path d="M34.9811 16.2655C34.3635 26.3194 26.3194 34.3634 16.2656 34.981V40H40V16.2655H34.9811Z" fill="currentColor"></path>
                </g>
                <g className="text-info">
                    <path d="M15.0195 30.0413C23.3152 30.0413 30.0403 23.3163 30.0403 15.0205H15.0195V30.0413Z" fill="currentColor"></path>
                </g>
                <g className="text-primary">
                    <path d="M29.1953 10.0415C27.141 4.19328 21.571 0 15.0208 0C6.725 0 0 6.725 0 15.0208C0 21.571 4.19328 27.141 10.0415 29.1953V10.0415H29.1953Z" fill="currentColor"></path>
                </g>
                </svg>
                <h3 className="h4">Система лояльности</h3>
                <p className="mb-0">
                Делаем своих клиентов счастливее! <br/> Познакомьтесь пожалуйста с нашей бонусной системой. <br/> Она состоит из направлений: ПОДАРКИ, СЕРТИФИКАТЫ, ПРОМОКОД, АКЦИИ.</p>
            </div>
            <div className="card-footer border-0 pt-3 mb-3">
                <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
            </div></a></div>
        {/* Item*/}
        <div className="col"><a className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/">
            <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"  style={{backgroundImage: 'url(assets/img/landing/corporate/services/05.jpg)'}}>
                <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div>
            </div>
            <div className="card-body pb-3">
                <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <g className="text-primary">
                    <path d="M19.9999 0C11.1313 0 3.61211 5.77313 0.992188 13.7659H39.0077C36.3877 5.77313 28.8686 0 19.9999 0Z" fill="currentColor"></path>
                </g>
                <g className="text-info">
                    <path d="M7.29328 16.1094H0.379453C0.131328 17.368 0 18.6684 0 19.9998C0 26.9291 3.52437 33.0348 8.87797 36.6237L18.3427 27.1589L7.29328 16.1094Z" fill="currentColor"></path>
                </g>
                <g className="text-primary">
                    <path d="M10.9688 37.848C13.6819 39.2238 16.7505 39.9998 20.0007 39.9998C31.0464 39.9998 40.0007 31.0455 40.0007 19.9998C40.0007 18.6684 39.8694 17.3679 39.6213 16.1094H32.7074L10.9688 37.848Z" fill="currentColor"></path>
                </g>
                </svg>
                <h3 className="h4">Наши ближайщие события</h3>
                <p className="mb-0">
                 
                </p>
            </div>
            <div className="card-footer border-0 pt-3 mb-3">
                <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
            </div></a></div>
        {/* Item*/}
        <div className="col"><a className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/">
            <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"  style={{backgroundImage: 'url(assets/img/landing/corporate/services/06.jpg)'}}>
                <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div>
            </div>
            <div className="card-body pb-3">
                <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <g className="text-info">
                    <path d="M20.0004 36.0226L10.982 21.3535C9.42594 23.3156 8.49609 25.7968 8.49609 28.4955C8.49609 34.8492 13.6467 39.9998 20.0004 39.9998C26.3541 39.9998 31.5047 34.8492 31.5047 28.4955C31.5047 25.7969 30.5749 23.3156 29.0188 21.3535L20.0004 36.0226Z" fill="currentColor"></path>
                </g>
                <g className="text-primary">
                    <path d="M39.3962 0H0.605469L20.0009 31.5477L39.3962 0ZM25.7601 7.62359L20.0009 16.9914L14.2416 7.62359H25.7601Z" fill="currentColor"></path>
                </g>
                </svg>
                <h3 className="h4">Фотогалерея</h3>
                <p className="mb-0">
                </p>
            </div>
            <div className="card-footer border-0 pt-3 mb-3">
                <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
            </div></a></div>
        </div>
    </section>
    {/* Partners (Brands)*/}
    <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
    <h2 className="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">Компании, которые нам доверяют</h2>
            <p className="text-center pb-2 pb-sm-3">Клиенты, которые стали нашими друзьями за этот год</p>
        <div className="row row-cols-3 row-cols-md-4 g-2 g-md-4 pb-2 pb-sm-3 pb-md-4 pb-xl-5">
        <div className="col"><img className="d-block mx-auto" src="assets/img/brands/RSHB.png" width="220" alt="RCHB"/></div>
                <div className="col"><img className="d-block mx-auto" src="assets/img/brands/AgriBrasil.jpg" width="220" alt="AgriBrasil"/></div>
                <div className="col"><img className="d-block d-dark-mode-none mx-auto" src="assets/img/brands/NassauGroup.jpg" width="220" alt="NassauGroup"/>
                <img className="d-none d-dark-mode-block mx-auto" src="assets/img/brands/SeaVew.jpg" width="220" alt="SeaVew"/></div>
                <div className="col"><img className="d-block d-dark-mode-none mx-auto" src="assets/img/brands/RegenBogen.jpg" width="220" alt="RegenBogen"/><img className="d-none d-dark-mode-block mx-auto" src="assets/img/brands/starcraft-light.svg" width="220" alt="Starcraft"/></div>
                <div className="col"><img className="d-block mx-auto" src="assets/img/brands/Travel72.jpg" width="220" alt="Travel72"/></div>
                <div className="col"><img className="d-block d-dark-mode-none mx-auto" src="assets/img/brands/GemoTest.jpg" width="220" alt="GemoTest"/>
                <img className="d-none d-dark-mode-block mx-auto" src="assets/img/brands/Muzakalka.jpg" width="220" alt="Muzakalka"/></div>
                <div className="col"><img className="d-block mx-auto" src="assets/img/brands/Mebelier72.jpeg" width="220" alt="Mebelier72"/></div>
                <div className="col"><img className="d-block mx-auto" src="assets/img/brands/philips.svg" width="220" alt="Philips"/></div>
        </div>
    </section>
    {/* Features*/}
    <section className="bg-secondary py-5">
        <div className="container py-md-2 py-lg-4 my-xl-2 my-xxl-3">
        {/* Item*/}
        <div className="row align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280" dataDisableParallaxDown="md">
            <div className="col-md-6 col-xxl-5 offset-lg-1 offset-xl-2 offset-xxl-3 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <div className="position-relative">
                <img className="d-block rounded-1" src="assets/img/landing/corporate/features/01.jpg" alt="Img"/>
                <div className="d-none d-lg-block position-absolute top-0 end-0 translate-middle-y w-auto pe-1 me-4">
                <div dataos="fade-up" dataAosDuration="950" dataAosOffset="280">
                    <svg className="text-info" width="107" height="107" viewBox="0 0 107 107" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M106.192 53.0468C106.225 63.5385 103.146 73.8042 97.3443 82.5459C91.5426 91.2875 83.279 98.1125 73.5985 102.158C63.918 106.203 53.2553 107.287 42.9589 105.272C32.6624 103.257 23.1946 98.2343 15.7528 90.8387C8.31094 83.4431 3.22928 74.0068 1.15039 63.7231C-0.92849 53.4394 0.0887821 42.7702 4.07357 33.0647C8.05836 23.3591 14.8317 15.0531 23.537 9.19711C32.2424 3.34107 42.4887 0.197979 52.9804 0.16529L53.1457 53.2121L106.192 53.0468Z"></path>
                    </svg>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 order-md-1" data-aos="fade-up" data-aos-duration="800" data-aos-offset="180" data-disable-parallax-down="md">
            <div className="pe-md-4 pe-lg-0">
                <h2 className="h1 pb-sm-2 pb-lg-3">Тенденции современного бизнеса</h2>
                <p className="fs-xl pb-3 mb-1 mb-sm-2 mb-md-3 mb-lg-4">Vitae tempor morbi tellus pulvinar ut iaculis sit tristique in turpis volutpat quam nec pretium eu nulla egestas ultrices donec in pulvinar ut fermentum  nun aliquam.</p>
                <a className="d-inline-flex align-items-center fw-semibold text-decoration-none" href="/">Learn more<i className="ai-arrow-right fs-4 ms-2"></i></a>
            </div>
            </div>
        </div>
        {/* Item*/}
        <div className="row align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4" data-aos="fade-up" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
            <div className="col-md-6 col-xxl-5 offset-xl-1 offset-xxl-2 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <div className="position-relative"><img className="d-block rounded-1 position-relative zindex-2" src="assets/img/landing/corporate/features/02.jpg" alt="Img"/>
                <div className="d-none d-lg-block position-absolute top-0 start-0 translate-middle-x w-auto pt-3 mt-5">
                <div data-aos="fade-up" data-aos-duration="950" data-aos-offset="280">
                    <svg className="text-primary" width="160" height="160" viewBox="0 0 160 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="80" cy="80" r="80"></circle>
                    </svg>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-xl-5 order-md-1" data-aos="fade-up" data-aos-duration="800" data-aos-offset="180" data-disable-parallax-down="md">
            <div className="pe-md-4 pe-lg-0">
                <h2 className="h1 pb-3 mb-2 mb-lg-3 mb-xl-4">Наш профессиональный подход к вашему бизнесу</h2>
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                <div className="col">
                    <div className="text-muted mb-2">01</div>
                    <h3 className="h5">Individual approach</h3>
                    <p className="mb-0">Hac erat leo proin odio est sed sit in felis facilisi integer sed congue neque turpis dictumst sitsed volutpat aliquet tortor.</p>
                </div>
                <div className="col">
                    <div className="text-muted mb-2">02</div>
                    <h3 className="h5">Integrated analytics</h3>
                    <p className="mb-0">Find aute irure dolor in enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue neque turpis.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Item*/}
        <div className="row align-items-center py-3 py-sm-4 py-lg-5 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4" data-aos="fade-up" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
            <div className="col-md-6 col-xxl-5 offset-lg-1 offset-xl-2 offset-xxl-3 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <div className="position-relative"><img className="d-block rounded-1" src="assets/img/landing/corporate/features/03.jpg" alt="Img"/>
                <div className="d-none d-lg-block position-absolute top-0 start-50 translate-middle w-auto ms-2">
                <div data-aos="fade-up" data-aos-duration="950" data-aos-offset="280">
                    <svg className="text-danger" width="108" height="111" viewBox="0 0 108 111" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.9244 1.23484C69.1072 0.713703 69.6783 0.438641 70.1961 0.630706C78.5792 3.74012 86.1086 8.79818 92.1601 15.3932C98.4371 22.2339 102.93 30.5171 105.241 39.5091C107.552 48.501 107.61 57.9241 105.41 66.9438C103.209 75.9634 98.8179 84.3011 92.6254 91.2184C86.4328 98.1356 78.6299 103.419 69.9078 106.6C61.1857 109.782 51.8136 110.763 42.6217 109.457C33.4298 108.151 24.7018 104.598 17.2109 99.1136C9.98911 93.8259 4.13195 86.8998 0.117483 78.9106C-0.130486 78.4171 0.079957 77.8191 0.577752 77.5799L21.7446 67.4094C22.2425 67.1702 22.8384 67.3807 23.0936 67.8705C25.2883 72.084 28.4252 75.7403 32.2656 78.5522C36.3752 81.5612 41.1634 83.5102 46.2062 84.2266C51.2489 84.943 56.3905 84.4048 61.1756 82.6595C65.9606 80.9142 70.2414 78.0157 73.6387 74.2208C77.0359 70.426 79.4449 65.8518 80.6522 60.9036C81.8594 55.9553 81.8277 50.7857 80.5598 45.8526C79.2919 40.9196 76.827 36.3753 73.3834 32.6224C70.1654 29.1154 66.1855 26.4006 61.7558 24.6837C61.2409 24.4841 60.9659 23.9149 61.1488 23.3938L68.9244 1.23484Z"></path>
                    </svg>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 order-md-1" data-aos="fade-up" data-aos-duration="800" data-aos-offset="180" data-disable-parallax-down="md">
            <div className="pe-md-4 pe-lg-0">
                <h2 className="h1 pb-sm-2 pb-lg-3">Полный спектр услуг</h2>
                <p className="fs-xl mb-lg-4">Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                <ul className="list-unstyled pb-3 mb-3 mb-lg-4">
                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Forecasting and recommendations</li>
                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Identification of patterns, analysis</li>
                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Segmentation by various methods</li>
                </ul>
                <a className="btn" style={{backgroundColor: '#004655'}} href="/">Book a free consultation</a>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* Industries*/}
    <section className="bg-dark dark-mode position-relative pb-5 pb-lg-0 pt-md-2 pt-lg-4 pt-xl-5">
        <div className="container pb-sm-3 pb-md-4 pb-lg-0 pt-5">
        <div className="row pb-2 pb-lg-0 pt-1 pt-sm-4">
            <div className="col-md-5 col-xl-4">
            <h2 className="h1 text-center text-md-start pb-3 mb-0 mb-md-3 mb-lg-4">Отрасли, в которых мы работаем</h2>
            {/* Button visible on screens > 768px*/}<a className="btn btn-outline-primary d-none d-md-inline-flex"
            //  style={{backgroundColor: '#004655'}} 
             href="/"> Подробнее об отраслях </a>
            </div>
            <div className="col-md-7 col-lg-6 offset-lg-1 offset-xl-2">
            <div className="ps-md-4 ps-lg-0">
                {/* Accordion*/}
                <div className="accordion accordion-alt" id="industries">
                <div className="accordion-item mb-n3 mb-lg-n2 mb-xl-1">
                    <h3 className="accordion-header">
                    <button className="accordion-button" type="button" dataBsToggle="collapse" dataBsTarget="#finance" ariaExpanded="true" ariaControls="finance">Finance and insurance</button>
                    </h3>
                    <div className="accordion-collapse collapse show" id="finance" dataBsParent="#industries">
                    <div className="accordion-body">Sit purus platea nunc semper auctor integer semper et ac odio eget a lacus eu duis ante sed molestie varius tempus gravida libero pretium sit etiam morbi orci et vestibulum velit consectetur posuere suscipit.</div>
                    </div>
                </div>
                <div className="accordion-item mb-n3 mb-lg-n2 mb-xl-1">
                    <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tech" aria-expanded="false" aria-controls="tech">Startup and technology</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="tech" data-bs-parent="#industries">
                    <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere finibus dui, eget scelerisque ipsum suscipit nec. Praesent nec quam in ipsum ultricies ultricies et sagittis dui platea nunc semper auctor.</div>
                    </div>
                </div>
                <div className="accordion-item mb-n3 mb-lg-n2 mb-xl-1">
                    <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#medicine" aria-expanded="false" aria-controls="medicine">Medicine and beauty</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="medicine" data-bs-parent="#industries">
                    <div className="accordion-body">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt imperdiet hendrerit. Fusce tortor turpis, facilisis ac efficitur eget etiam morbi orci et.</div>
                    </div>
                </div>
                <div className="accordion-item mb-n3 mb-lg-n2 mb-xl-1">
                    <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#real-estate" aria-expanded="false" aria-controls="real-estate">Real estate and catering</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="real-estate" data-bs-parent="#industries">
                    <div className="accordion-body">Aenean suscipit, lacus eu sagittis pretium, quam purus aliquet velit, in vestibulum eros massa et eros. Proin sed mollis tortor. Integer non felis condimentum, gravida metus nec, mollis mauris ultrices malesuada.</div>
                    </div>
                </div>
                <div className="accordion-item mb-n3 mb-lg-n2 mb-xl-1">
                    <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ecommerce" aria-expanded="false" aria-controls="ecommerce">E-commerce</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="ecommerce" data-bs-parent="#industries">
                    <div className="accordion-body">Curabitur dictum sodales aliquam. Etiam tortor augue, ultrices in efficitur sit amet, luctus dapibus magna. Vivamus eu lacus elementum, ultrices massa vitae, elementum lorem tristique senectus et netus.</div>
                    </div>
                </div>
                <div className="accordion-item mb-n3 mb-lg-n2 mb-xl-1">
                    <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#education" aria-expanded="false" aria-controls="education">Educational and training</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="education" data-bs-parent="#industries">
                    <div className="accordion-body">Sed sollicitudin interdum nunc ut pharetra. Proin vehicula volutpat mattis. Curabitur a ipsum leo. Praesent dapibus est ac risus maximus, sit amet placerat diam congue elit sem commodo justo scelerisque ipsum.</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Button visible on screens < 768px*/}
        <div className="text-center d-md-none mt-4"><a className="btn btn-outline-primary" href="/"> More about industries  </a></div>
        </div>
        {/* Shapes*/}
        <div className="d-none d-lg-flex align-items-end mt-xl-n5">
        <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
            <svg className="text-info" width="116" height="191" viewBox="0 0 116 191" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M58 191C90.0325 191 116 165.033 116 133L116 4C116 1.79086 114.209 7.8281e-08 112 1.74846e-07L60 2.44784e-06C26.8629 3.89631e-06 4.54735e-07 26.8629 1.9032e-06 60L5.09413e-06 133C6.49432e-06 165.033 25.9675 191 58 191Z"></path>
            </svg>
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay="150">
            <svg className="text-warning" width="199" height="120" viewBox="0 0 199 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <rect width="199" height="120" rx="60"></rect>
            </svg>
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
            <svg className="text-danger" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="84.5" cy="84.5" r="84.5"></circle>
            </svg>
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay="450">
            <svg className="text-primary" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.38722e-06 84.5C5.92617e-06 101.213 4.95585 117.55 14.2408 131.446C23.5258 145.342 36.7229 156.172 52.1633 162.568C67.6036 168.963 84.5937 170.637 100.985 167.376C117.377 164.116 132.433 156.068 144.251 144.251C156.068 132.433 164.116 117.377 167.376 100.985C170.637 84.5937 168.963 67.6036 162.568 52.1632C156.172 36.7229 145.342 23.5258 131.446 14.2408C117.55 4.95584 101.213 -5.92617e-06 84.5 -7.38722e-06L84.5 84.5L7.38722e-06 84.5Z"></path>
            </svg>
        </div>
        </div>
    </section>
    {/* Testimonials*/}
    <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <div className="row pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-md-2">
        <div className="col-md-9 col-lg-7 order-md-2">
      
            {/* Swiper slider*/}
            {/* <div className="swiper" 
            dataSwiperOptions="{
            &quot;spaceBetween&quot;: 40,
            &quot;loop&quot;: true,
            &quot;bindedContent&quot;: true,
            &quot;autoHeight&quot;: true,
            &quot;pagination&quot;: {
            &quot;el&quot;: &quot;.testimonials-count&quot;,
            &quot;type&quot;: &quot;fraction&quot;
            },
            &quot;navigation&quot;: {
            &quot;prevEl&quot;: &quot;#prev-testimonial&quot;,
            &quot;nextEl&quot;: &quot;#next-testimonial&quot;
            } }" 
            > */}

        <swiper-container >
          <swiper-slide>  
            <div className="swiper-slide" data-swiper-binded="#testimonial-1">
                <div className="d-flex d-md-none pt-3 mb-3"><i className="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                    <div className="ps-3">
                    <h3 className="h5 mb-0">Lilia Bocouse</h3>
                    <p className="text-muted mb-0">Head of Marketing</p>
                    </div>
                </div>
                <h2 className="mb-lg-4">Thanks to your talented team for the strategy we dreamed about!</h2>
                <p className="lead mb-0">Suspendisse mauris elit, pellentesque nec purus sed, finibus finibus ipsum. Proin posuere, metus sed porttitor pellentesque, ante magna tincidunt mi, nec fermentum dui ligula vel massa. Praesent ultrices iaculis arcu iaculis ultrices. Maecenas vitae nulla odio. In laoreet, lectus in tempus ultricies.  </p>
                </div>
          </swiper-slide>
          <swiper-slide>
            <div className="swiper-slide" data-swiper-binded="#testimonial-2">
                <div className="d-flex d-md-none pt-3 mb-3"><i className="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                    <div className="ps-3">
                    <h3 className="h5 mb-0">Robert Fox</h3>
                    <p className="text-muted mb-0">Marketing Coordinator</p>
                    </div>
                </div>
                <h2 className="mb-lg-4">Exceptional work, delivery and flexibility. An excellent result.</h2>
                <p className="lead mb-0">Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim etiamier turpis tincidunt eget placerat feugiat senectusic quisque faucibus placerat sodales vitae tempor morbi tellus pulvinar tristique in turpis.  </p>
                </div>
          </swiper-slide>
          <swiper-slide>   
            <div className="swiper-slide" data-swiper-binded="#testimonial-3">
                <div className="d-flex d-md-none pt-3 mb-3"><i className="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                    <div className="ps-3">
                    <h3 className="h5 mb-0">Jenny Wilson</h3>
                    <p className="text-muted mb-0">CEO, Co-Founder</p>
                    </div>
                </div>
                <h2 className="mb-lg-4">Thanks to you, we have created a unique branding that is our pride!</h2>
                <p className="lead mb-0">Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, nisi tellus iaculis quam, eget egestas mi felis eu urna. Quisque id nisl commodo, egestas eros ac, cursus odio. Ut nec rutrum magna, vel tempor erat. Vivamus nec tempus purus.  </p>
                </div>
          </swiper-slide>
        </swiper-container>
            {/* <div className="swiper-wrapper"> */}
                {/* Item*/}
                {/* <div className="swiper-slide" data-swiper-binded="#testimonial-1">
                <div className="d-flex d-md-none pt-3 mb-3"><i className="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                    <div className="ps-3">
                    <h3 className="h5 mb-0">Lilia Bocouse</h3>
                    <p className="text-muted mb-0">Head of Marketing</p>
                    </div>
                </div>
                <h2 className="mb-lg-4">Thanks to your talented team for the strategy we dreamed about!</h2>
                <p className="lead mb-0">Suspendisse mauris elit, pellentesque nec purus sed, finibus finibus ipsum. Proin posuere, metus sed porttitor pellentesque, ante magna tincidunt mi, nec fermentum dui ligula vel massa. Praesent ultrices iaculis arcu iaculis ultrices. Maecenas vitae nulla odio. In laoreet, lectus in tempus ultricies.  </p>
                </div> */}
                {/* Item*/}
                {/* <div className="swiper-slide" data-swiper-binded="#testimonial-2">
                <div className="d-flex d-md-none pt-3 mb-3"><i className="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                    <div className="ps-3">
                    <h3 className="h5 mb-0">Robert Fox</h3>
                    <p className="text-muted mb-0">Marketing Coordinator</p>
                    </div>
                </div>
                <h2 className="mb-lg-4">Exceptional work, delivery and flexibility. An excellent result.</h2>
                <p className="lead mb-0">Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim etiamier turpis tincidunt eget placerat feugiat senectusic quisque faucibus placerat sodales vitae tempor morbi tellus pulvinar tristique in turpis.  </p>
                </div> */}
                {/* Item*/}
                {/* <div className="swiper-slide" data-swiper-binded="#testimonial-3">
                <div className="d-flex d-md-none pt-3 mb-3"><i className="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                    <div className="ps-3">
                    <h3 className="h5 mb-0">Jenny Wilson</h3>
                    <p className="text-muted mb-0">CEO, Co-Founder</p>
                    </div>
                </div>
                <h2 className="mb-lg-4">Thanks to you, we have created a unique branding that is our pride!</h2>
                <p className="lead mb-0">Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, nisi tellus iaculis quam, eget egestas mi felis eu urna. Quisque id nisl commodo, egestas eros ac, cursus odio. Ut nec rutrum magna, vel tempor erat. Vivamus nec tempus purus.  </p>
                </div>
            </div> */}
            {/* </div> */}
        </div>
        <div className="col-md-3 offset-lg-1 order-md-1 mt-n3"><i className="ai-quotes d-none d-md-block text-primary ms-n2 mb-1" style={{fontSize: '150px'}}></i>
            {/* Contnetn binded to slider (on screens > 768px)*/}
            <div className="binded-content h-auto d-none d-md-block">
            <div className="binded-item h-auto active" id="testimonial-1">
                <h3 className="h5 mb-1">Lilia Bocouse</h3>
                <p className="text-muted mb-0">Head of Marketing</p>
            </div>
            <div className="binded-item h-auto" id="testimonial-2">
                <h3 className="h5 mb-1">Robert Fox</h3>
                <p className="text-muted mb-0">Marketing Coordinator</p>
            </div>
            <div className="binded-item h-auto" id="testimonial-3">
                <h3 className="h5 mb-1">Jenny Wilson</h3>
                <p className="text-muted mb-0">CEO, Co-Founder</p>
            </div>
            </div>
            {/* Swiper controls*/}
            <div className="d-flex align-items-center pb-2 pb-md-0 pt-4 mt-3">
            <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial"><i className="ai-arrow-left"></i></button>
            <div className="testimonials-count fw-medium flex-shrink-0 text-center" style={{width: '2.5rem'}}></div>
            <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="next-testimonial"><i className="ai-arrow-right"></i></button>
            </div>
        </div>
        </div>
    </section>
    {/* Team*/}
    <section className="container pt-5 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5">
        <div className="row g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2">
        <div className="col-lg-4 d-flex flex-column">
            <h2 className="display-2 d-none d-lg-block">Наша команда</h2>
            <h2 className="h1 d-lg-none text-center mb-0">Наша команда</h2>
            <div className="d-none d-lg-flex mt-auto mb-n3">
            <div data-aos="fade-left" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
                <svg className="text-info" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="84.5" cy="84.5" r="84.5"></circle>
                </svg>
            </div>
            <div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">  
                <svg className="text-primary" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M169 84.5C169 101.213 164.044 117.55 154.759 131.446C145.474 145.342 132.277 156.172 116.837 162.568C101.396 168.963 84.4063 170.637 68.0149 167.376C51.6235 164.116 36.567 156.068 24.7495 144.251C12.9319 132.433 4.88409 117.377 1.62364 100.985C-1.63681 84.5937 0.0365658 67.6036 6.43217 52.1632C12.8278 36.7229 23.6583 23.5258 37.5543 14.2408C51.4503 4.95583 67.7875 -6.12546e-06 84.5 -7.38722e-06L84.5 84.5L169 84.5Z"></path>
                </svg>
            </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4">
            <div className="card card-hover border-0 rounded-1 overflow-hidden"><img src="assets/img/landing/corporate/team/01.jpg" alt="AnnaR"/>
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                <h3 className="h5 mb-1">Рублева Анна Владимировна</h3>
                <p className="mb-3">Руководитель Центра. Сертифицированный бизнес-тренер: 
                International Коуч / Командный коуч/ Коуч переговоров</p>
                <div className="d-flex justify-content-center">
                    <a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="https://www.facebook.com/profile.php?id=100035482865697"><i className="ai-facebook"></i></a>
                    <a className="btn btn-icon btn-sm btn-light btn-twitter rounded-circle mx-2" href="https://www.instagram.com/women_art_trick/"><i className="ai-odnoklassniki"></i></a>
                    <a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/anyuta_rubleva/"><i className="ai-linkedin"></i></a>
                    <a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="/"><i className="ai-vk"></i></a>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4">
            <div className="card card-hover border-0 rounded-1 overflow-hidden"><img src="assets/img/landing/corporate/team/02.jpg" alt="Img"/>
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                <h3 className="h5 mb-1">Martha Winter</h3>
                <p className="mb-3">Data analyst</p>
                <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-instagram rounded-circle mx-2" href="/"><i className="ai-instagram"></i></a><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="/"><i className="ai-linkedin"></i></a></div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4">
            <div className="card card-hover border-0 rounded-1 overflow-hidden"><img src="assets/img/landing/corporate/team/03.jpg" alt="Img"/>
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                <h3 className="h5 mb-1">Jane Cooper</h3>
                <p className="mb-3">Head of PR department</p>
                <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-instagram rounded-circle mx-2" href="/"><i className="ai-instagram"></i></a><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="/"><i className="ai-linkedin"></i></a></div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4 d-none d-lg-flex flex-column justify-content-center text-center">
            <p className="lead px-3 mb-0">
            Мы обеспечиваем Продуктивную атмосферу для достижения целей и получения навыков! Выбери свой ФОРМАТ! ДЕЛАЙСМЕЛО.
                </p>
        </div>
        <div className="col-sm-6 col-md-4">
            <div className="card card-hover border-0 rounded-1 overflow-hidden"><img src="assets/img/landing/corporate/team/04.jpg" alt="Img"/>
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                <h3 className="h5 mb-1">Albert Flores</h3>
                <p className="mb-3">Art director</p>
                <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-behance rounded-circle mx-2" href="/"><i className="ai-behance"></i></a><a className="btn btn-icon btn-sm btn-light btn-dribbble rounded-circle mx-2" href="/"><i className="ai-dribbble"></i></a></div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4">
            <div className="card card-hover border-0 rounded-1 overflow-hidden"><img src="assets/img/landing/corporate/team/05.jpg" alt="Img"/>
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                <h3 className="h5 mb-1">Robert Fox</h3>
                <p className="mb-3">CTO</p>
                <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-twitter rounded-circle mx-2" href="/"><i className="ai-twitter"></i></a><a className="btn btn-icon btn-sm btn-light btn-stack-overflow rounded-circle mx-2" href="/"><i className="ai-stack-overflow"></i></a></div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4">
            <div className="card card-hover border-0 rounded-1 overflow-hidden"><img src="assets/img/landing/corporate/team/06.jpg" alt="Img"/>
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                <h3 className="h5 mb-1">Michelle Yang</h3>
                <p className="mb-3">CEO, Founder</p>
                <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-instagram rounded-circle mx-2" href="/"><i className="ai-instagram"></i></a><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="/"><i className="ai-linkedin"></i></a></div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4 d-flex flex-column justify-content-center text-center">
            <div className="mx-auto" style={{maxWidth: '245px'}}>
            <h3 className="h2 mb-4">Познакомится  с нашей командой поближе</h3><a className="btn btn-outline-primary" href="/aboutus">О нас</a>
            </div>
        </div>
        </div>
    </section>
    {/* Blog*/}
    <section className="container py-5 mb-sm-2 mb-md-0 my-lg-3 my-xl-4 my-xxl-5">
        <h2 className="h1 text-center text-sm-start pb-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mb-3 mb-lg-4">Наши события</h2>
        <div className="row">
        <div className="col-lg-6 pb-3 mb-2 mb-sm-3"><a className="card h-100 border-0 rounded-1 overflow-hidden text-decoration-none bg-size-cover bg-position-center" href="/" style={{maxWidth: '600px', minHeight: '300px', backgroundImage: 'url(assets/img/landing/corporate/blog-img.jpg)'}}>
            <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
            <div className="card-body dark-mode d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2">
                <h3>New business strategies for 2022</h3>
                <p className="mb-0">Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim. Dapibus est ac risus maximus...</p>
            </div></a></div>
        <div className="col-lg-6">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
            <article className="col">
                <div className="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
                <h3 className="h4"><a href="/">Promotion from scratch to the first sales</a></h3>
                <p className="mb-4">Suscipit consectetur nam hac in enim, adipiscing aenean tortor ac commodo eu nibh a tempus sed...</p>
                <div className="d-flex align-items-center"><span className="fs-sm text-muted">August 13, 2022</span><span className="fs-xs opacity-20 mx-3">|</span><a className="badge text-nav fs-xs border" href="/">Strategy</a></div>
                </div>
            </article>
            <article className="col">
                <div className="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
                <h3 className="h4"><a href="/">New business strategies for 2022</a></h3>
                <p className="mb-4">Orci massa sapien varius odio et vel egestas ultricies commodo tristique ullamcorper sit vitae cursus...</p>
                <div className="d-flex align-items-center"><span className="fs-sm text-muted">August 2, 2022</span><span className="fs-xs opacity-20 mx-3">|</span><a className="badge text-nav fs-xs border" href="/">Business</a></div>
                </div>
            </article>
            <article className="col">
                <div className="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
                <h3 className="h4"><a href="/">Outgoing year results, the main news</a></h3>
                <p className="mb-4">Mauris suscipit in tempor, platea lobortis mollis rutrum aliquam pulvinar ultricies orci augue libero...</p>
                <div className="d-flex align-items-center"><span className="fs-sm text-muted">July 27, 2022</span><span className="fs-xs opacity-20 mx-3">|</span><a className="badge text-nav fs-xs border" href="/">Analytics</a></div>
                </div>
            </article>
            <article className="col">
                <div className="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
                <h3 className="h4"><a href="/">How to define goals and objectives</a></h3>
                <p className="mb-4">Sed convallis integer egestas sapien sapien purus enim massa porttitor vulputate metus purus in fringilla...</p>
                <div className="d-flex align-items-center"><span className="fs-sm text-muted">July 19, 2022</span><span className="fs-xs opacity-20 mx-3">|</span><a className="badge text-nav fs-xs border" href="/">Strategy</a></div>
                </div>
            </article>
            </div>
        </div>
        </div>
        <div className="text-end pb-md-4 pt-3 mt-2 mt-sm-3 mt-lg-4"><a className="d-inline-flex align-items-center fw-semibold text-decoration-none" href="/">All articles<i className="ai-arrow-right fs-4 ms-2"></i></a></div>
    </section>
    {/* Contact CTA*/}
    <section className="position-relative mt-n5 mt-lg-0">
        <div className="bg-secondary position-absolute bottom-0 start-0 w-100" style={{height: 'calc(100% - 3rem)'}}></div>
        <div className="container position-relative zindex-2">
        <div className="row">
            <div className="col-lg-6 py-5 pb-lg-0 mb-sm-2 mb-md-3 mb-lg-0 mt-3 mt-sm-4 mt-md-5">
            <h2 className="h1 text-center text-lg-start pt-3 mt-3 mb-4">Стать частью <br className='d-none d-lg-inline'/>нашей команды</h2>
            {/* <div className="d-flex justify-content-between mx-auto mx-lg-0" style={{maxWidth: '370px'}}>
                <ul className="ps-4 me-3">
                <li className="mt-2">Financial analyst</li>
                <li className="mt-2">Business analyst</li>
                <li className="mt-2">Software tester</li>
                </ul>
                <ul className="ps-4">
                <li className="mt-2">Head of marketing</li>
                <li className="mt-2">Strategy advisor</li>
                <li className="mt-2">Lead UX designer</li>
                </ul>
            </div> */}
            <div className="text-center text-lg-start pt-4"><a className="btn btn-outline-dark" href="/">Подать заявку на работу</a></div>
            <div className="d-none d-lg-flex justify-content-end mt-n4 me-n4">
                <div data-aos="fade-left" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
                <svg className="text-danger" width="117" height="117" viewBox="0 0 117 117" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-2.51516e-06 58.5C-3.52666e-06 70.0702 3.43096 81.3806 9.85902 91.0008C16.2871 100.621 25.4235 108.119 36.113 112.547C46.8025 116.975 58.5649 118.133 69.9128 115.876C81.2607 113.619 91.6844 108.047 99.8657 99.8657C108.047 91.6844 113.619 81.2607 115.876 69.9128C118.133 58.5649 116.975 46.8025 112.547 36.113C108.119 25.4235 100.621 16.2871 91.0009 9.85903C81.3806 3.43096 70.0702 -4.24071e-06 58.5 -5.11423e-06L58.5 58.5L-2.51516e-06 58.5Z"></path>
                </svg>
                </div>
                <div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">  
                <svg className="text-info" width="117" height="117" viewBox="0 0 117 117" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="58.5" cy="58.5" r="58.5"></circle>
                </svg>
                </div>
            </div>
            </div>
            <div className="col-lg-6">
            <div className="Header bg-primary d-flex flex-column align-items-center justify-content-center position-relative h-100 rounded-1 rounded-bottom-0 p-5">
                <div className="dark-mode position-relative zindex-2 py-sm-3 py-md-4" style={{maxWidth: '360px'}}>
                <h2 className="h1">Готовы обсудить ваш формат?</h2>
                <p className="mb-0">Мы команда, которая поможет Вам подобрать программу.</p>
                <div className="d-flex flex-column flex-sm-row align-items-center pt-3 mt-3 mt-lg-4"><a className="btn btn-light w-100 w-sm-auto me-sm-4 mb-2 mb-sm-0" href="contacts-v1.html">Связаться с нами</a><a className="d-inline-block text-white fw-medium p-2" href="mailto:email@example.com">developskillsnow@yandex.ru</a></div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </main>
    {/* Footer*/}
    {/* <footer className="footer dark-mode bg-dark pb-3 pt-sm-3 py-md-4 py-lg-5">
    <div className="container pb-4 pt-5">
        <div className="d-md-flex align-items-center justify-content-between pb-1 pb-md-0 mb-4 mb-md-5">
        <nav className="nav justify-content-center justify-content-md-start pb-sm-2 pb-md-0 mb-4 mb-md-0 ms-md-n3"><a className="nav-link py-1 px-0 mx-3" href="/">Services</a>
        <a className="nav-link py-1 px-0 mx-3" href="/">Reviews</a>
        <a className="nav-link py-1 px-0 mx-3" href="/">Team</a><a className="nav-link py-1 px-0 mx-3" href="/">Blog</a><a className="nav-link py-1 px-0 mx-3" href="/">Contact</a></nav>
        <div className="d-flex justify-content-center justify-content-md-start me-md-n2">
            <a className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle mx-2" href="/">
                <i className="ai-instagram"></i>
                </a>
                <a className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a>
                <a className="btn btn-icon btn-sm btn-secondary btn-twitter rounded-circle mx-2" href="/"><i className="ai-twitter"></i></a><a className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle mx-2" href="/">
                    <i className="ai-linkedin"></i></a></div>
    </div>
    <div className="d-md-flex align-items-center justify-content-between text-center text-md-start">
        <a className="nav-link d-inline-block text-muted fs-sm text-decoration-none order-md-2 py-1 px-0 mb-3 mb-md-0" href="/">Privacy policy</a>
      <p className="fs-sm order-md-1 mb-0"><span className="opacity-70">&copy; All rights reserved. Made by </span>
      <a className="nav-link d-inline fw-normal p-0" href="https://createx.studio/" target="blank" rel="noopener">Elenka_San</a></p>
    </div>
  </div>
</footer> */}
{/* Back to top button*/}
<a className="btn-scroll-top" href="#top" data-scroll>
  <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></circle>
  </svg><i className="ai-arrow-up"></i></a>
  </body>
      </div>
    );
  }
}
