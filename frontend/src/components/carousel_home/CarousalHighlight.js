import React, { Component } from 'react';
import Center from '../../images/center_dinpao.jpg'
import Esan from '../../images/Esan_saerng.jpg'
import North from '../../images/north_fon.jpg'
import South from '../../images/south_TaLuang.jpg'
import styled from 'styled-components'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: Center,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: Esan,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: North,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: South,
    altText: 'Slide 4',
    caption: 'Slide 4'
  }
];

const Img = styled.img`
  width: 100%
`

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
          <Img src={item.src} alt={item.altText}  />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
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