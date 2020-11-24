import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../assets/images/carousel1.jpg';
import carousel2 from '../../assets/images/carousel2.jpg';
import carousel3 from '../../assets/images/carousel3.jpg';
import ScrollDown from '../MyCarouselTitle/ScrollDown/ScrollDown';
import styles from './MyCarousel.module.css';

const MyCarousel = () => {
    return (
    <div id="home">
        <Carousel controls={false} indicators>
              <Carousel.Item interval={2000}>
                <img
                className={styles.slider__img}
                src={carousel1}
                alt="First slide"
                />
                </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                className={styles.slider__img}
                src={carousel2}
                alt="Third slide"
                />
               </Carousel.Item>
               <Carousel.Item interval={1700}>
                <img
                className={styles.slider__img}
                src={carousel3}
                alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>    
            <ScrollDown/>
        </div>
    );
};

export default MyCarousel;