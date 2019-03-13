// 1. Import React DOM
import React from "react";

// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";

//2.a import required objects from redux and react-redux packages
//import create store
import { createStore } from "redux";
//import provider
import { Provider } from "react-redux";

//2.b. import reducer
//NOTE : reducer will be imported as default instance of 'combinereducer'
import reducer from "./reduxapp/reducers/reducers.js";

//3. Bootstrap css
import "!style!css!bootstrap/dist/css/bootstrap.min.css";

//4. Import all react components
import SimpleComponent from "./components/simplecomponent.jsx";
import StatefulComponent from "./components/statefulcomponent.jsx";
import MiscellaneousOperations from "./casestudyday1/miscellaneousoperations.jsx";
import ProductUIComponent from "./components/applications/productUIComponent.jsx";
import PrintMessage from "./components/functional/printMessageComponent.jsx";
import HOCComponent from "./components/hoc/HOCComponent.jsx";
import StockComponent from "./components/hoc/StockComponent.jsx";
import CompanyComponent from "./components/hoc/CompanyComponent.jsx";
import MainComponent from "./reduxapp/maincomponent.jsx";
//let data ="I am Custom Property from Simple Component";
//let data ="I am functional Component";
let data ="I am HOC Component";

let companies = [{
    id: 101,
    name: 'Microsoft'
}, {
    id: 102,
    name: 'Google'
}];

let stocks = [{
    id: 201,
    name: 'TATA Capital'
}, {
    id: 202,
    name: 'Bajaj Finance'
}];

let CurrentComponent1 = HOCComponent(StockComponent, stocks);
let CurrentComponent2 = HOCComponent(CompanyComponent, companies);

//create store, the reducer parameter to the createStore() method will be used to monitor 
//and update the state in the store
//React app config
let store = createStore(reducer);

//5. Rendering the components
// ReactDom.render(<SimpleComponent message={data} />, document.getElementById('app'));
// ReactDom.render(<StatefulComponent/>, document.getElementById('app'));
// ReactDom.render(<Arithematicoperations />, document.getElementById('app'));
//ReactDom.render(<MiscellaneousOperations />, document.getElementById('app'));
//ReactDom.render(<ProductUIComponent />, document.getElementById('app'));
//ReactDom.render( < CurrentComponent1 /> , document.getElementById("app"));
//ReactDom.render( < CurrentComponent2 /> , document.getElementById("app"));
//ReactDom.render( < MainComponent /> , document.getElementById("app"));

//5. Rendering the components under the provider and store
ReactDom.render( 
     <Provider store={store}>
         <MainComponent />
     </Provider>,    
     document.getElementById("app"));