//1.1 Create a Action Type as constant
//1.2. Action Type --> This is the name that will be used by reducer 
//for updating the state in the store.
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

//2. The action creator function. This will contains logic that is to be executed 
//when the action dispatch request is received from React-view.
//2.a.  This function will accept the parameter from view this is also known as 'PAYLOAD'
//2.b   This function will return the type Object aka JSON, this will consists of ACTION_TYPE
// and the processed PAYLOAD 
export function addProduct(product){
    alert('In action method ');
    //Add logic to modify the payload
    return  {
        type : ADD_PRODUCT,
        //Valid to send the state - It is defult JSON object
        product
    };
}

export function editProduct(product){
    alert('In action edit method ');
    //Add logic to modify the payload
    return  {
        type : EDIT_PRODUCT,
        //Valid to send the state - It is defult JSON object
        product
    };
}