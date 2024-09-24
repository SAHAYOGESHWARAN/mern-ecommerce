
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const useBasket = () => {
  return useContext(AppContext);
};

export default useBasket;
