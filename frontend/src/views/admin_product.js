import React from "react";
import styled from "styled-components";
import ProductTable from "../components/admin/product_table";
import ProductAdd from "../components/admin/product_add";

const Component = styled.div`
  padding-top: 5em;
  margin-bottom: 5em;
`;

class AdminProduct extends React.Component {
  render() {
    return (
      <Component className="container">
        <h2>Product</h2>
        <ProductAdd />
        <ProductTable />
      </Component>
    );
  }
}

export default AdminProduct;
