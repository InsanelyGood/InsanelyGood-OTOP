import React from 'react'
import styled from "styled-components";

const Table = styled.table`
  width: 50%;
`;
const TDCenter = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

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