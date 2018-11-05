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

export default ProductCart