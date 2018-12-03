import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  padding-right: 5px;
`;

class PurchasedItems extends React.Component {

  render() {
    const { item , date} = this.props;
    let str = new Date(date).toUTCString();
    var res = str.split(" ");
    return (
        <tr>
            <td>{res[4]}<br/>{res[1]+" "+res[2]+" "+res[3]}</td>
            <td><Image src={item.product.image}/></td>
            <td>{item.product.name}</td>
            <td>{item.product.price}<br/>x {item.quantity}</td>
            <td>=</td>
            <td><strong>{item.product.price*item.quantity}</strong></td>
        </tr>
    );
  }
}

export default PurchasedItems;
