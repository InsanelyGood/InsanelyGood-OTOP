import React from "react";
import { getProducts } from "../../api/products_list";
import { Table, TH } from './admin_styled'
import ProductItem from './product_item'

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    this.setState({
      products: await getProducts()
    });
  }

  handleSortByPrice = () => {
    let sortPrice = this.state.products.sort(
      (first, second) => first.price - second.price
    );
    this.setState({ products: sortPrice });
  };

  render() {
    return (
      <div className="container mt-5">
        <Table align="center">
          <thead>
            <tr>
              <TH>Name</TH>
              <TH>Region</TH>
              <TH onClick={this.handleSortByPrice}>Price</TH>
            </tr>
          </thead>
          <tbody>
            {this.state.products &&
              this.state.products.map(product => (
                <ProductItem key={product._id} detail={product} />
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductTable;
