import React from "react";
import styled from "styled-components";
import ProductTable from "../components/admin/product_table";

const Component = styled.div`
  padding-top: 5em;
`;

class AdminProduct extends React.Component {
  render() {
    return (
      <Component className="container">
        <h2>Product</h2>
        <ProductTable />
      </Component>
    );
  }
}

export default AdminProduct;
