import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";
import axios from "axios";

const AppContext = createContext();
const apiKey = "https://api.pujakaitem.com/api/products";
// 3. we define the initial state here of the reducer hook
// 4. and we define the reducer in productReducer function inside reducer folder
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  // 2. then we make a reducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  //1. first we fetch the data from the apikey and put in into the context hook to access in another component.
  //! fetching featureProduct data
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" }); 
    //first dispatch the loading then data and then error if any.
    try {
      const response = await axios.get(url);
      const products = await response.data;
      // console.log('product',products)
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //! single product data 
  const getSingleProduct = async(url) => {
    dispatch({type: "SET_SINGLE_LOADING"})
    try{
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({type:"SET_SINGLE_PRODUCT_DATA", payload: singleProduct})
    }
    catch (error){
    dispatch({type: "SINGLE_PRODUCT_ERROR"})
    }
  }

  useEffect(() => {
    getProducts(apiKey);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// custom hooks, can use it by calling the function.
//? passed the value of context hook in this function, the value can be used by calling this function in any component or page
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };