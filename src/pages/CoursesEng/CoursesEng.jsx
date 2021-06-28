import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {EffectFade, Pagination, Navigation, Scrollbar, A11y} from 'swiper'

import 'swiper/swiper-bundle.min.css'
import Styles from "../Courses/Courses.module.css";

SwiperCore.use([EffectFade,Navigation, Pagination, Scrollbar, A11y]);

const CoursesEng = () => {
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
                        <h3 className={Styles.subheading}>Курсы английского языка</h3>
                        <p className={Styles.text}>Мы предоставляем вам 2 вида обучения на выбор: Grammar и Talking Club. <br/><br/>
                            На курсах Grammar больше внимания уделяется изучению грамматики, пониманию текстов и, в целом, английской речи. На курсах Talking Club вы практикуете и улучшаете свои разговорные навыки. Индивидуальный подход к каждому студенту позволит любому начать понимать и говорить на английском. <br/><br/>
                            Уникальность наших курсов в том, что у нас не будет монотонных и скучных уроков. Мы обещаем вам уютную атмосферу и chill vibe.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы английского языка</h3>
                        <p className={`${Styles.label} ${Styles.circle}`}>Grammar</p>
                        <div className={Styles.block}>
                            <div className={Styles.item}>
                                <p className={Styles.text}>Beginner (3р / intensive)</p>
                                <ul className={Styles.list}>
                                    <li>Длительность: 2 мес / 1 мес</li>
                                    <li>Стоимость:</li>
                                    <li>Максимальное количество людей: 10</li>
                                    <li>Длительность уроков: 70 минут</li>
                                    <li>График: 10:00 – 21:00, Пн - Сб</li>
                                </ul>
                            </div>
                            <div className={Styles.item}>
                                <p className={Styles.text}>Elementary (3р / intensive), Pre-Intermediate (3р / intensive)</p>
                                <ul className={Styles.list}>
                                    <li>Длительность: 3 мес / 2 мес</li>
                                    <li>Стоимость:</li>
                                    <li>Максимальное количество людей: 10</li>
                                    <li>Длительность уроков: 70 минут</li>
                                    <li>График: 10:00 – 21:00, Пн - Сб</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы английского языка</h3>
                        <p className={`${Styles.label} ${Styles.circle}`}>Speaking</p>
                        <p className={Styles.text}>Elementary (3р / intensive), Pre-Intermediate (3р / intensive), Intermediate (3р / intensive)</p>
                        <ul className={Styles.list}>
                            <li>Длительность: 2 мес / 1 мес</li>
                            <li>Стоимость:</li>
                            <li>Максимальное количество людей: 10</li>
                            <li>Длительность уроков: 70 минут</li>
                            <li>График: 10:00 – 21:00, Пн - Сб</li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CoursesEng;