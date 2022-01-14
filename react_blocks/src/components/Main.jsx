import React, { Component } from 'react';
import './Main.css'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <h1>Main</h1>
                {this.props.children}
            </div>
        );
    }
}
export default Main;