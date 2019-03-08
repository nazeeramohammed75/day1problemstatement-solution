// 1. Import React DOM
import React from "react";

// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";

//3. Bootstrap css
import "!style!css!bootstrap/dist/css/bootstrap.min.css";

//4. Import all react components
// import SimpleComponent from "./components/simplecomponent.jsx";
// import StatefulComponent from "./components/statefulcomponent.jsx";
import MiscellaneousOperations from "./casestudyday1/miscellaneousoperations.jsx";
// let data ="I am Custom Property from Simple Component";

//5. Rendering the components
// ReactDom.render(<SimpleComponent message={data} />, document.getElementById('app'));
// ReactDom.render(<StatefulComponent/>, document.getElementById('app'));
// ReactDom.render(<Arithematicoperations />, document.getElementById('app'));
ReactDom.render(<MiscellaneousOperations />, document.getElementById('app'));