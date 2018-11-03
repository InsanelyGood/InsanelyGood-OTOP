import React from 'react';
import '../../css/product_item.css';
import { Link } from 'react-router-dom'

class ProductItem extends React.Component {

  onMouseOver = ()=> {
    
  }

  onMouseOut = ()=> {

  }

    render = () => {
        return <div className="product-item">
            <div className="product-card-box">
              <Link to={"/products/" + this.props.product_name}>
                {/* <CardImg src={this.props.product_image} alt="error" /> */}
                <img alt="error" src={this.props.product_image} className="product-card-image" />
              </Link>
              <Link to={"/products/" + this.props.product_name} className="product-card-description">
                <p className="product-card-band">
                  {this.props.product_name}
                </p>
                <p className="product-card-description">
                  {this.props.product_des}
                </p>
                <p className="product-card-price">
                  Price: <span>{this.props.product_price}</span>
                </p>
              </Link>
            </div>
          </div>;
    }

}

export default ProductItem;