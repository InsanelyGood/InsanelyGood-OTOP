import React, {Component} from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Img = styled.img`
    height: 130px;
`

export default class PauseSlider extends Component {

    samples = ()=> {
        return this.props.products.map((product)=> (<Link to={product.id}><Img className='btn' src={product.image}/></Link>))
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 2,
                      infinite: true,
                      dots: true
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 2,
                      infinite: true,
                      dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                }
            ]
          };
          return (
            <Slider {...settings}>
              {this.samples()}
            </Slider>
          );      
    }
}