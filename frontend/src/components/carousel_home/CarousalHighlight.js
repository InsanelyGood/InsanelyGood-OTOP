import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../../css/home.css';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://user-images.githubusercontent.com/25145746/46333919-617a0180-c64c-11e8-93b7-99f704e55f61.jpg',
    caption: 'Product from Central of Thailand',
    altText: 'Slide 1'
  },
  {
    src: 'https://user-images.githubusercontent.com/25145746/46333887-41e2d900-c64c-11e8-95b4-7c791a01bb09.jpg',
    altText: 'NortEastProduct',
    caption: 'Product from NorthEast of Thailand'
  },
  {
    src: 'https://user-images.githubusercontent.com/25145746/46333914-5de67a80-c64c-11e8-8461-a139b63f6bf0.jpg',
    altText: 'NorthProduct',
    caption: 'Product from North of Thailand',
    button: 'Shop Now'
  },
  {
    src: 'https://user-images.githubusercontent.com/25145746/46333925-63dc5b80-c64c-11e8-86d1-a594a14435d3.jpg',
    altText: 'SouthProduct',
    caption: 'Product from South of Thailand'
  }
];

class CarousalHighlight extends Component {
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
          {/* <a href="#" class="button">Link Button</a> */}
          <p>
            <img src={item.src} alt={item.altText}  width="100%" />
            {/* <a href="#" class="button">Link Button</a> */}
          </p>
          
          <CarouselCaption captionText={"Shop Now"} captionHeader={item.caption} cssModule={item.button}/>
        </CarouselItem>
      );
    });

    return (
    <div>
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
    </div>
       
    );
  }
}


export default CarousalHighlight;