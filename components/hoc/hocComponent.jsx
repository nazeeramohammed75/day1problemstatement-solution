import React, { Component } from 'react';

//The HOCComponent accepts the input parameter as Component and returns the component
export default function HOCComponent(MyComponent, data) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                sourceData : data
            };
        }    

        render () {
            return <MyComponent data={this.state.sourceData} />;
        }

    };
}