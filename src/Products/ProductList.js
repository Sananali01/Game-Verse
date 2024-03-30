import React from 'react';
import Product from './Product';

function ProductList({ products, onAddToCart }) {
  return (
    <>
      <h1 className="product-heading">Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
