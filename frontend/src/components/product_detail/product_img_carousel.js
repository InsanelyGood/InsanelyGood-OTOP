import React, {Component} from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import styled from 'styled-components';

const Img = styled.img`
    width: 400px;
    heigth: 100px;
`
let items = []

export default class ImgCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = { activeIndex: 0 }
    }

    next = ()=> {
        if(this.animating) return
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex })
    }

    previous = ()=> {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex })
    }

    goToIndex = (newIndex)=> {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    onExiting = ()=> {
        this.animating = true
    }

    onExited = ()=> {
        this.animating = false
    }

    render() {
        items = []
        const { activeIndex } = this.state
        items.push({src: this.props.img})

        const slides = items.map((item) => {
            return (
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
              >
                <Img src={item.src}/>
              </CarouselItem>
            );
          });

          return (
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          );
    }
}

  