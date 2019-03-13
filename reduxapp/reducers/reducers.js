//1. Import Action types
import { ADD_PRODUCT } from "./../actions/actions.js";
import { EDIT_PRODUCT } from "./../actions/actions.js";
//2. Standard imports from redu
import { 
    combineReducers
} from "redux";
import { Reducer } from "react/index.js";
//3. Creating reducer functions.
//NOTE : There can be multiple reducer functions one reducer can invoke other reducer.(This is possible.)
export function addProductReducer(state, action) {
    switch(action.type) {
        case ADD_PRODUCT :
            return {
                product  : action.product
            };
        default :
           return state;    
    }
}

//4. The reducer, that will call the addProductReducer and will 
//return state based on added product
//for the first invocation the state is empty
//state will be filled when the product is added
export function listProductReducer(state = [], action) {
    switch(action.type) {
        case ADD_PRODUCT :
            alert('In the Add product reducer  ');
            //the state will be immutable by adding new products
            return [...state, addProductReducer(undefined, action)];         
        default :
           return state;    
    }
}

export function editProductReducer(state, action) {
    switch(action.type) {
        case EDIT_PRODUCT :
            return {
                product  : action.product
            };
        default :
           return state;    
    }
}

//5. combining the reducers. (NOTE : In our case listProductReducer is calling addProductReducer)
const productReducer = combineReducers(
    {
       listProductReducer,
       editProductReducer
    }
);

//6. export the combine reducer
export default productReducer;