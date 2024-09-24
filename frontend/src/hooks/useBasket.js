

import { useContext } from 'react';
import AppContext from '../context/AppContext';

const useBasket = () => {
  const { state, dispatch } = useContext(AppContext);

  const addToBasket = (product) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: product });
  };

  return { addToBasket };
};

export default useBasket;
