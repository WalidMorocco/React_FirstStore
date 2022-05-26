import useFetch from '../useFetch';

const useFetchProduct = (productId) => {
  return useFetch(`/products/${productId}`);
};

export default useFetchProduct;
