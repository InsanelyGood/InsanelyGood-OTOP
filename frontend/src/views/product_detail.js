import React from "react";
import styled from "styled-components";
import ProductImage from "../components/product_detail/product_image";
import ProductDescription from "../components/product_detail/product_description";
import { getProduct } from "../api/products_list";

const Detail = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  padding-top: 5em;
`;
const DesDetail = styled.div`
  margin: auto;
`;

class ProductDetail extends React.Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    this.setState({
      product: (await getProduct(window.location.pathname))[0]
    });
  }

  render() {
    return (
      <div>
        <Detail className="container">
          <div className="col-md-6">
            <ProductImage imageUrl={this.state.product.image} />
          </div>
          <DesDetail className="col-md-6">
            <ProductDescription productDetail={this.state.product} />
          </DesDetail>
        </Detail>
      </div>
    );
  }
}

export default ProductDetail;
