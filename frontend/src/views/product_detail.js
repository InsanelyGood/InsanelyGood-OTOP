import React from "react";
import styled from "styled-components";
import ProductDescription from "../components/product_detail/product_description";
import { getProduct, getProducts } from "../api/products_list";
import ImgCarousel from '../components/product_detail/product_img_carousel';
import PauseSlider from '../components/product_detail/product_slider'

const Detail = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  padding-top: 5em;
`

const DesDetail = styled.div`
  
`
const Content = styled.div`
  display: block;
`
const Row = styled.div`
  display: flex;
`
const Slide = styled.div`
  margin-top: 30px;
`

class ProductDetail extends React.Component {
  state = {
    product: {},
    products: []
  }

  async componentDidMount() {
    this.setState({
      product: (await getProduct(window.location.pathname))[0],
      products: (await getProducts())
    })
  }

  filtered = ()=> {
    return this.state.products.filter((product)=>
    (product.category === this.state.product.category)&&product.name!==this.state.product.name)
  }

  render(){

    return (
      <div>
        <Detail className="container">
          <Content>
            <Row>
                <div className="col-md-6">
                  <ImgCarousel img={this.state.product.image} />
                </div>
                <DesDetail className="col-md-6">
                 <ProductDescription productDetail={this.state.product} />
                </DesDetail>
            </Row>
            <Slide><PauseSlider images={this.filtered()}/></Slide>
          </Content>
        </Detail>
      </div>
    )
  }
}

export default ProductDetail;
