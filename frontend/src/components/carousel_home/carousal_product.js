import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem
} from 'reactstrap';
import badgeC from '../../images/badge_c.jpg'
import badgeM from '../../images/large_badge.jpg'
import badgeN from '../../images/badge_n.jpg'
import badgeS from '../../images/badge_s.jpg'

const items = [
  {
    src: badgeC,
    altText: 'badge1'
  },
  {
    src: badgeN,
    altText: 'badge2'
  },
  {
    src: badgeM,
    altText: 'badge3'
  },
  {
    src: badgeS,
    altText: 'badge4'
  }
];

class CarouselProduct extends Component {
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
          <img src={item.src} alt={item.altText} width="100%"/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
      </Carousel>
    );
  }
}


export default CarouselProduct;