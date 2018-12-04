import React, { Component } from "react";
import ProductPanel from "../components/products_page/product_panel";
import ProductsCat from "../components/products_page/product_cat";
import { getProducts } from "../api/products_list";
import styled from "styled-components";

import CarouselProduct from "../components/carousel_home/carousal_product";

const Block = styled.div`
  height: 100%;
`;

const Row = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  // padding-top: 1x;
  display: flex;
`;

const Left = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 20%;
  }
  width: 470px;
`;

const Right = styled.div`
  width: 100%;
  margin-bottom: 35px;
`;
const FILTER_CASE = "filter";
const SEARCH_CASE = "search";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      types: ['south'],
      search: "",
      renderState: 'filter'
    };
  }

  async componentDidMount() {
    this.setState({
      products: await getProducts()
    });
  }

  // componentDidUpdate = prevProps => {
  //   if (prevProps.location.state.types !== this.props.location.state.types) {
  //     this.setState({
  //       types: this.props.location.state.types,
  //       renderState: this.props.location.state.renderState
  //     });
  //   }
  // };

  productFilter = () => {
    let filter = [];
    if (this.state.types.length < 1) {
      return <ProductPanel productsShow={this.state.products} />;
    }
    if (
      this.state.types.includes("North") ||
      this.state.types.includes("central") ||
      this.state.types.includes("south") ||
      this.state.types.includes("east")
    ) {
      filter = this.state.products.filter(product =>
        this.state.types.includes(product.region)
      );
    } else {
      filter = this.state.products.filter(product =>
        this.state.types.includes(product.category)
      );
    }
    return <ProductPanel productsShow={filter} />;
  };

  productSearch = () => {
    let products = this.state.products.filter(product =>
      this.checkProductName(
        this.state.search.toUpperCase(),
        product.name.toUpperCase()
      )
    );

    // if (products.length <= 0) {
    //     return <Noti>
    //       No Result For <SearchText>
    //         '{this.state.search}'
    //       </SearchText>
    //     </Noti>;
    // } else {
    //   return  <ProductPanel productsShow={products} />
    // }

    return <ProductPanel productsShow={products} />;
  };

  renderProductPanel = input_case => {
    switch (input_case) {
      case FILTER_CASE:
        return this.productFilter();

      case SEARCH_CASE:
        return this.productSearch();
      default:
        return <ProductPanel productsShow={this.state.products} />;
    }
  };

  checkProductName = (search, product) => {
    let wow = [];
    let search_length = search.length;
    if (product.includes(" ")) {
      product = product.split(" ");
      wow = product.filter(p => p.substring(0, search_length) === search);

      return wow.length > 0;
    } else {
      return product.substring(0, search_length) === search;
    }
  };

  changeTypes = nTypes => {
    this.setState({ types: nTypes, renderState: FILTER_CASE });
  };

  changeSearchValue = value => {
    this.setState({
      search: value,
      renderState: SEARCH_CASE
    });
  };

  render() {
    return (
      <div style={{ paddingTop: "3.5em" }}>
        <Block>
          <CarouselProduct />
          <Row>
            <Left>
              <ProductsCat
                initialType='south'
                changeTypes={this.changeTypes}
                searchValue={this.changeSearchValue}
              />
            </Left>
            <Right>{this.renderProductPanel(this.state.renderState)}</Right>
          </Row>
        </Block>
      </div>
    );
  }
}

export default ProductsPage;
