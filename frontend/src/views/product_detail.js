import React from "react";
import styled from "styled-components";
import ProductDescription from "../components/product_detail/product_description";
import { getProduct, getProducts } from "../api/products_list";
import ImgCarousel from '../components/product_detail/product_img_carousel';
import PauseSlider from '../components/product_detail/product_slider'

const Detail = styled.div`
  padding-top: 5em;
`

const DesDetail = styled.div`
  
`
const ImgBlock = styled.div`
  margin-right: 50px;
`

const Content = styled.div`
  display: block;
`
const Row = styled.div`
  display: flex;
  justify-content: center;
`
const Slide = styled.div`
  @media(max-width: 1560px) {
    margin-left: 200px;
    margin-right: 200px;
  }
  @media(max-width: 1400px) {
    margin-left: 180px;
    margin-right: 180px;
  }
  @media(max-width: 1300px) {
    margin-left: 150px;
    margin-right: 150px;
  }
  @media(max-width: 1000px) {
    margin-left: 100px;
    margin-right: 100px;
  }
  margin-top: 100px;
  margin-left: 300px;
  margin-right: 300px;
  margin-bottom: 110px;
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

  componentDidUpdate = async (prevProps) => {
    if(this.props.match.url !== prevProps.match.url) {
      this.setState({
        product: (await getProduct(window.location.pathname))[0],
        products: (await getProducts())
      })
    }
  }

  filtered = ()=> {
    // return this.state.products.sort((a)=> {
    //   return (a.name.toUpperCase() < this.product.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > this.product.name.toUpperCase()) ? 1 : 0;
    // }).filter(p => p.name !== this.product.name)
    return this.state.products.filter(product => product.name !== this.state.product.name)
  }

  render(){

    return (
      <div>
        <Detail>
          <Content>
            <Row>
              <ImgBlock><ImgCarousel img={this.state.product.image} /></ImgBlock>
              <DesDetail>
                 <ProductDescription productDetail={this.state.product} />
              </DesDetail>
            </Row>
            <Slide><PauseSlider products={this.filtered()}/></Slide>
          </Content>
        </Detail>
      </div>
    )
  }
}

export default ProductDetail;
