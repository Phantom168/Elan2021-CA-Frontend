import React, { Component } from 'react'
import Header from './header';
import Footer from './footer';

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default BaseLayout
