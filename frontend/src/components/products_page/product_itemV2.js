import React from "react";
import "../../css/product_item.css";
import { ProductCard } from "react-ui-cards";

class ProductItem extends React.Component {
  render = () => {
    return (
      <div className="col-md-4 col-sm-6 product-item">
        <ProductCard
          photos={[this.props.product_image]}
          price={this.props.product_price}
          productName={this.props.product_name}
          description={this.props.product_des}
          url={"/products/" + this.props.product_name}
        />
      </div>
    );
  };
}

export default ProductItem;
