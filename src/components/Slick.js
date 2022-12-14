import React, { Component } from 'react'
import Slider from 'react-slick'
import kelapa1 from '../Assets/Minyak-Kelapa-Murni-1.png'
import Card from './Card'

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="py-[24px]">
        <Slider {...settings}>
          <div className="pr-2">
            <Card img={kelapa1} judul={'1'} judul2={'2'} />
          </div>
          <div className="pr-2">
            <Card img={kelapa1} judul={'1'} judul2={'2'} />
          </div>
          <div className="pr-2">
            <Card img={kelapa1} judul={'1'} judul2={'2'} />
          </div>
          <div className="pr-2">
            <Card img={kelapa1} judul={'1'} judul2={'2'} />
          </div>
          <div className="pr-2">
            <Card img={kelapa1} judul={'1'} judul2={'2'} />
          </div>
          <div className="pr-2">
            <Card img={kelapa1} judul={'1'} judul2={'2'} />
          </div>
        </Slider>
      </div>
    )
  }
}
