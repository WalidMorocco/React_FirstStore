import React, { useContext } from 'react';
import useFetchProducts from '../../hooks/products/useFetchProducts';
import Spinner from '../Spinner';
import { ProductListRow } from './ProductListRow';
import { ThemeContext } from '../../context/themeContext';

const ProductsList = () => {
  const { data: products, loading, error } = useFetchProducts();
  const { theme } = useContext(ThemeContext);

  if (loading) return <Spinner />;

  if (error) {
    return <p>There was an error</p>;
  }

  return (
    <div className="product-container" style={({ backgroundColor: theme.background, color: theme.foreground })}>
      {products.length > 0 &&
        products.map((product) => {
          return <ProductListRow key={product.id} product={product} />;
        })}
    </div>
  );
};

export default ProductsList;
