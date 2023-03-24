const ProductReducer = (state, action) => {

    switch(action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
            
        case "SET_API_DATA":
            const featureData = action.payload.filter((elem) => {
                return elem.featured === true; 
            });

            return{
                ...state,
                isLoading: false,
                // added data to the empty array defined in productContext
                products: action.payload,
                featureProducts: featureData,
            }

        case "API_ERROR":
            return{
                ...state,
                isLoading: false,
                isError: true,
            };

        case "SET_SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading: false,
            }

        case "SET_SINGLE_PRODUCT_DATA":
            return{
                ...state,
                isSingleLoading: false,
                singleProduct: action.paylaod,
            }
        
            case "SINGLE_PRODUCT_ERROR":
                return{
                    ...state,
                    isSingleLoading: false,
                    isError: true,
                };
    
        default: 
        return state;
    }
}
// console.log('feature Products', featureProducts);

export default ProductReducer