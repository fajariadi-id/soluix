import React from 'react';
import {
  Image,
  ProductCard,
  ProductContainer,
  SectionProduct,
} from './Product.element';
import { products } from '../../../assets/data/data';
import {
  BodyText,
  CardContainer,
  SectionTitle,
  Title,
} from '../Value/Value.element';

const Product = () => {
  return (
    <SectionProduct id='product'>
      <ProductContainer>
        <SectionTitle>Our Product</SectionTitle>
        <CardContainer>
          {products.map(({ title, body, img }, idx) => (
            <ProductCard key={idx}>
              <Image src={img} alt={title} />

              <Title>{title}</Title>
              <BodyText>{body}</BodyText>
            </ProductCard>
          ))}
        </CardContainer>
      </ProductContainer>
    </SectionProduct>
  );
};

export default Product;
