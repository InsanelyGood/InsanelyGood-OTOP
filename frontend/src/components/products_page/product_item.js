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
              <Link to={"/products/" + this.props.product.id}>
                {/* <CardImg src={this.props.product_image} alt="error" /> */}
                <img alt="error" src={this.props.product.image} className="product-card-image" />
              </Link>
              <Link to={"/products/" + this.props.product.id} className="product-card-description">
                <p className="product-card-band">
                  {this.props.product.name}
                </p>
                <p className="product-card-description">
                  {this.props.product.description}
                </p>
                <p className="product-card-price">
                  Price: <span>{this.props.product.price}</span>
                </p>
              </Link>
            </div>
          </div>;
    }

}

export default ProductItem;