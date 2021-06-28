import React from 'react'
import './mentors.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Pagination, Navigation } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import Styles from "../Courses/Courses.module.css";

SwiperCore.use([EffectFade, Pagination, Navigation])


const Mentors = () => {
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
                    <h3 className='title'>Наши менторы</h3>
                    <div className="slide-block">
                    <div className={Styles.slide}>
                    <div className='our-mentors-block'>
                        <div className='owr-mentors'>
                            <img className='mentors-img' src="https://i.pinimg.com/originals/78/4e/9d/784e9d1796bb5926220418b6f3c4f4fa.jpg" alt=""/>
                            <span className="mentors-name-test">Бекназар - JS mentor</span>
                            <p className="mentors-info"> consectetur adipisicing elit. Debitis distinctio doloribus impedit labore maiores minima nesciunt omnis sequi, totam. Quod.</p>
                        </div>
                    </div>
                    </div>
                    <div className={`${Styles.slide} block`}>
                        <div className='our-mentors-block'>
                            <div className='owr-mentors'>
                                <img className='mentors-img' src="https://i.pinimg.com/originals/78/4e/9d/784e9d1796bb5926220418b6f3c4f4fa.jpg" alt=""/>
                                <span className="mentors-name-test">Бекназар - JS mentor</span>
                                <p className="mentors-info"> consectetur adipisicing elit. Debitis distinctio doloribus impedit labore maiores minima nesciunt omnis sequi, totam. Quod.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h3 className='title'>Наши менторы</h3>
                    <div className="slide-block">
                        <div className={Styles.slide}>
                            <div className='our-mentors-block'>
                                <div className='owr-mentors'>
                                    <img className='mentors-img' src="https://i.pinimg.com/originals/78/4e/9d/784e9d1796bb5926220418b6f3c4f4fa.jpg" alt=""/>
                                    <span className="mentors-name-test">Бекназар - JS mentor</span>
                                    <p className="mentors-info"> consectetur adipisicing elit. Debitis distinctio doloribus impedit labore maiores minima nesciunt omnis sequi, totam. Quod.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.slide} block`}>
                            <div className='our-mentors-block'>
                                <div className='owr-mentors'>
                                    <img className='mentors-img' src="https://i.pinimg.com/originals/78/4e/9d/784e9d1796bb5926220418b6f3c4f4fa.jpg" alt=""/>
                                    <span className="mentors-name-test">Бекназар - JS mentor</span>
                                    <p className="mentors-info"> consectetur adipisicing elit. Debitis distinctio doloribus impedit labore maiores minima nesciunt omnis sequi, totam. Quod.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Mentors;