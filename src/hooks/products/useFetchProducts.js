import useFetch from '../useFetch';

const useFetchProducts = () => {
  return useFetch('/products');
};

export default useFetchProducts;
