import React from 'react'

class ProductCart extends React.Component {

    render() {
        return (
            <tbody>
                <tr>
                    <td>
                        {this.props.cartItem.product.name} 
                    </td>
                    <td>
                        {this.props.cartItem.product.price}
                    </td>
                    <td>
                        {this.props.cartItem.quantity}
                    </td>
                    <td>
                        {this.props.cartItem.product.price * this.props.cartItem.quantity}
                    </td>
                </tr>
            </tbody>
        )}
}
ProductCart.defaultProps = {
    cartItem: {
      product: {
        name: '',
        price: 0
      },
      quantity: 0
    }
  };

export default ProductCart