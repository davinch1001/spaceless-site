import React from 'react'
import Styles from './Courses.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Pagination, Navigation } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import './Courses.module.css'

SwiperCore.use([EffectFade, Pagination, Navigation])

export const Courses = () => {
    return (
        <div className={Styles.courses}>
            <Swiper
                speed={1000}
                centeredSlides={true}
                allowTouchMove={false}
                spaceBetween={100}
                slidesPerView={1}
                effect="fade"
                // cubeEffect={{
                //     shadow: true,
                //     slideShadows: true,
                //     shadowOffset: 20,
                //     shadowScale: 0.94
                // }}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                style={{ padding: '0px 70px' }}
            >

                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы программирования</h3>
                        <p className={`${Styles.text} ${Styles.circle}`}>Язык Python(Backend)</p>
                        <ul className={Styles.list}>
                            <li>Длительность: 2.5 мес + 0.5 мес (подготовка и помощь с трудоустройством)</li>
                            <li>Стоимость 35000 сом</li>
                            <li>Максимальное количество людей: 18</li>
                            <li>Длительность уроков: 3 часа с ментором</li>
                            <li>График: 9:00 – 12:00, Пн – Сб</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы программирования</h3>
                        <p className={`${Styles.text} ${Styles.circle}`}>Язык Java(Backend)</p>
                        <ul className={Styles.list}>
                            <li>Длительность: 2.5 мес + 0.5 мес (подготовка и помощь с трудоустройством)</li>
                            <li>Стоимость 35000 сом</li>
                            <li>Максимальное количество людей: 18</li>
                            <li>Длительность уроков: 3 часа с ментором</li>
                            <li>График: 14:00 – 17:00, Пн – Сб</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы программирования</h3>
                        <p className={`${Styles.text} ${Styles.circle}`}>Язык JavaScript(Frontend)</p>
                        <ul className={Styles.list}>
                            <li>Длительность: 2.5 мес + 0.5 мес (подготовка и помощь с трудоустройством)</li>
                            <li>Стоимость 35000 сом</li>
                            <li>Максимальное количество людей: 18</li>
                            <li>Длительность уроков: 3 часа с ментором</li>
                            <li>График: 18:00 – 21:00, Пн – Сб</li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <div>
                <h2 className={Styles.heading}>наши курсы <span></span></h2>
                <h3 className={Styles.subheading}>Курсы программирования</h3>
                <p className={Styles.text}>
                    Буткемп курс по языку программирования. 
                    Этот курс нацелен на то, чтобы обучить студентов
                    максимально нужным навыкам за максимально короткое время. При этом нужно учитывать, что
                    студент будет ходить каждый день и сидеть на 3х часовых курсах. 
                </p>
            </div> */}
            {/* <NavLink className={Styles.button} to="/courses">
                <img src={Arrow} alt="arrow"/>
            </NavLink> */}
        </div>
    )
}
