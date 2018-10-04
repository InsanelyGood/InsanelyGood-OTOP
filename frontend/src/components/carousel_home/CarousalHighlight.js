import React, { Component } from 'react';
import Central from '../../images/center_dinpao.jpg'
import Esan from '../../images/Esan_saerng.jpg'
import North from '../../images/north_fon.jpg'
import South from '../../images/south_TaLuang.jpg'
import styled from 'styled-components'
import '../../css/home.css'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: Central,
    altText: 'CentralProduct',
    caption: 'Product from Central',
    button: <a className ="btn btn-outline-white" href="/">Shop Collection</a>,
    positions: 'captionCentral'
  },
  {
    src: Esan,
    altText: 'NortEastProduct',
    caption:'Product from NorthEast',
    button: <a className ="btn btn-outline-white" href="/">Shop Collection</a>,
    positions: 'captionEsan'
  },
  {
    src: North,
    altText: 'NorthProduct',
    caption: 'Product from North',
    button: <a className ="btn-outline-white btn" href="/">Shop Collection</a>,
    positions: 'captionNorth'
  },
  {
    src: South,
    altText: 'SouthProduct',
    caption: 'Product from South',
    button: <a className ="btn btn-outline-white" href="/">Shop Collection</a>,
    positions: 'captionSouth'
  }
];

const Img = styled.img`
  width: 100%
` 

class CarousalHighlight extends  Component {

      constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }

      onExiting() {
        this.animating = true;
      }

      onExited() {
        this.animating = false;
      }

      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }

      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }

      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }

      render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
          return (
            <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
            >
              <Img src={item.src} alt={item.altText} />
              <CarouselCaption className = {item.positions} captionHeader={item.caption} captionText={item.button}  />
            </CarouselItem>
          );
        });

        return (
        <div > 
            <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>

                {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        </div>
          
        );
      }

}
 
export default CarousalHighlight;