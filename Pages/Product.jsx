import React from 'react';
import { Container } from 'reactstrap';
import Products from '../features/product/Products';
import Layout from '../Layout';

export default function ListMenu() {
  return (
    <Layout>
      <Container>
        <div className="d-flex justify-content-center">
          <h1 className="my-5">List Product</h1>
        </div>
        <Products />
      </Container>
    </Layout>
  );
}
