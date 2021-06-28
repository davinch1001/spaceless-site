import React from 'react';
import './projects.css'
import Logo from '../../assets/images/LOGO-header.png'
import LogoFooter from '../../assets/images/LOGO -footer.png'
import infoImg from '../../assets/images/3d 1.png'
import icon1 from '../../assets/images/icon-1.png'
import icon2 from '../../assets/images/web-design.png'
import icon3 from '../../assets/images/globe 2.png'
import img3d from '../../assets/images/3d-2.png'
import build from '../../assets/images/building.png'
import imgman from '../../assets/images/3d-man.png'
import img3d3 from '../../assets/images/3d-3.png'
import project from '../../assets/images/project.png'
import scroll from '../../assets/images/scroll.png'

const Projects = () => {
    return (
        <div>
                <div className="header-bg">
                <div className="container">
                    <header className="header">
                        <img src={Logo} alt="logo"/>
                        <nav className="header-nav">
                            <ul className="header-item">
                                <li><a className='header-items' href="#about">Главная</a></li>
                                <li><a className='header-items' href="#sevices">Услуги</a></li>
                                <li><a className='header-items' href="#sevices">Помощь</a></li>
                                <li><a className='header-items' href="#sevices">Портофолио</a></li>
                            </ul>
                        </nav>
                        <div className="contacts">
                            <button className="contact-number">Позвонить</button>
                        </div>
                    </header>
                </div>
                </div>

            <section id='about' className="about">

                <div className="about-text">
                    <p className="about-subtitle">
                        Коммерческая разработка для Вашего бизнеса
                    </p>
                    <div className="about-3d">
                        <div className='about-3d-text'>
                            <p className="about-me">
                                Мы являемся молодой процветающей компанией. Мы сделаем ваш сайт быстро, а главное - понятно.
                            </p>
                            <button className="about-btn">
                                Оставить заявку
                            </button>
                        </div>

                        <div className="about-3d-img">
                            <img src={infoImg} alt='3d'/>
                        </div>
                    </div>
                    </div>


            </section>

            <section id='sevices' className="services">

                <div className="container">

                    <div className="services-info">
                        <h1 className="services-title">Наши услуги</h1>
                        <div className="services-block">
                            <div className="service">
                                <img src={icon1} alt="" className="service-icon"/>
                                <span className="service-title">Разработка сайтов </span>
                                <p className="service-subtitle">Сделаем приложения, а также боты.</p>
                            </div>
                            <div className="service">
                                <img src={icon2} alt="" className="service-icon"/>
                                <span className="service-title">Разработка UX/UI дизайна</span>
                                <p className="service-subtitle">У вас будет уникальный дизайн сайта/landing page.</p>
                            </div>
                            <div className="service">
                                <img src={icon3} alt="" className="service-icon"/>
                                <span className="service-title">Расположение в интернете</span>
                                <p className="service-subtitle">Подключение к хочтингу, подключение домена.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className="order">

                <div className="container">
                    <h1 className="services-title">Как сделать заказ</h1>
                    <div className="order-info">
                        <div className="order-text">
                            <span className="text-step">Шаг <span className='step-number'>1</span></span>
                            <ol><li className="order-info-text"> · Оставить заявку на консультацию</li></ol>

                            <button className="order-btn">Оствить заявку</button>
                        </div>
                        <div className="order-img">
                            <img src={img3d} alt=""/>
                        </div>
                    </div>

                    <div className="order-step-two">
                        <div className="order-img">
                            <div className="order-build">
                                <div className='order-build'> <img src={build} alt=""/></div>
                            </div>
                            <img className='order-man' src={imgman} alt=""/>
                        </div>

                        <div className="order-text">
                            <span className="text-step-two">Шаг <span className='step-number'>2</span></span>
                            <div className="order-info-text">
                                ·  Придти на консультацию к нам в офис, чтобы объяснить что именно вы хотите получить
                            </div>
                        </div>

                    </div>

                    <div className="order-step-3">
                        <div className="order-info">
                            <div className="order-text">
                                <span className="text-step">Шаг <span className='step-number'>3</span></span>
                                <ol><li className="order-info-text"> · Мы составим Техническое задание, и утвердим его с вами. Согласуем цену и сроки, и начнём работать</li></ol>
                            </div>
                            <div className="order-img">
                                <img src={img3d3} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className="projects-page">

                <div className="container">

                    <h1 className="services-title">Наши проекты</h1>

                    <div className="projects-block">
                        <div className="project">
                            <div className="project-name">Project Name</div>
                            <img src={project} alt="" className="project-img"/>
                        </div>
                        <div className="project">
                            <div className="project-name">Project Name</div>
                            <img src={project} alt="" className="project-img"/>
                        </div>
                        <div className="project">
                            <div className="project-name">Project Name</div>
                            <img src={project} alt="" className="project-img"/>
                        </div>
                        <div className="project">
                            <div className="project-name">Project Name</div>
                            <img src={project} alt="" className="project-img"/>
                        </div>
                    </div>
                    <button className='view-more'>view more <img src={scroll} alt=""/></button>
                </div>

                <button className='project-btn'>Оставить заявку</button>

            </section>

            <footer className="footer">
                <div className="footer-logo"><img src={LogoFooter} alt=""/></div>
                <div className="footer-info">
                    <div className="email-adres">
                        <p className="email">Email:</p>
                        <p className="email">spaceless.management@gmail.com</p>
                    </div>
                    <div className="adres">
                        <p className="email">Местонахождение:</p>
                        <p className="email">Исанова 79 г. Бишкек</p>
                    </div>
                    <div className="numbers">
                        <p className="number">Телефон</p>
                        <p className="number">+996-555-34-85-20 <br/>
                            +996-709-03-90-79
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Projects;