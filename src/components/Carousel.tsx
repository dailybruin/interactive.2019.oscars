import React from 'react'
import { css, cx } from 'emotion'
import Swiper from 'react-id-swiper'


import leftArrow from '../images/left.png'
import rightArrow from '../images/right.png'

interface CarouselProps {
  imageURLs: string[],
}

class ImageCarousel extends React.Component<CarouselProps> {

  render() {
    const params = {
      ContainerEl: 'section',
      WrapperEl: 'section',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      renderPrevButton: () => <img className="swiper-button-prev" src={leftArrow}/>,
      renderNextButton: () => <img className="swiper-button-next" src={rightArrow}/>,
      spaceBetween: 30
    }

    return (
      <div>
        <Swiper {...params}>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css"></link>
          {this.props.imageURLs.map((image) =>
            <div className={css`
                padding: 32px;
                background-color: hotpink;
                font-size: 24px;
                border-radius: 4px;
              `}
            >
              <img 
                alt="img" 
                src={ image } 
              />
            </div>
          )}
        </Swiper>
      </div>
    )
  }
}

export default ImageCarousel;