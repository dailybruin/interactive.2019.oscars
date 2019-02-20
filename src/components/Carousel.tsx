import React from 'react'
import { css, cx } from 'emotion'
import Swiper from 'react-id-swiper'


import leftArrow from '../images/left.png'
import rightArrow from '../images/right.png'

import './styles.css'

interface CarouselProps {
  imageURLs: string[],
}

class Carousel extends React.Component<CarouselProps> {

  render() {
    const params = {
      ContainerEl: 'section',
      WrapperEl: 'section',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
      renderPrevButton: () => <img className="button-prev" src={leftArrow}/>,
      renderNextButton: () => <img className="button-next" src={rightArrow}/>,
    }

    return (
      <div>
        <Swiper {...params} className={css`background-color: black`}>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css"></link>
          {this.props.imageURLs.map((image) =>
            <div className={css`
                text-align: center;
                background-color: black;
              `}
            >
              <img src={ image }/>
            </div>
          )}
        </Swiper>
      </div>
    )
  }
}

export default Carousel;