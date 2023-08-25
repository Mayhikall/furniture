import React from 'react';
import { Card, CardBody, CardText, CardTitle, CardSubtitle, CardImg, Container } from 'reactstrap';

export default function CardProduct({ item }) {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <Container>
        <CardImg top width="100%" src={item.image} alt="product" style={{ objectFit: 'cover', height: '30vh' }} />
      </Container>
      <CardBody>
        <CardTitle tag="h5">{item.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Price: $ {item.price}
        </CardSubtitle>
        <CardText>{item.description.substring(1, 90)}</CardText>
      </CardBody>
    </Card>
  );
}
