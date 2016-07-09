'use strict';

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';


export default class Layout extends React.Component {
  render() {
    // variables for this component
    const { location } = this.props;

    // TODO: Move this to CSS later
    const containerStyle = {
      marginTop: '60px'
    };

    // TODO: Move this to CSS later
    const navStyle = {
      width: '100%'
    };

    return (
        <div className='layout'>
            <Nav location={location} />
            <div class="container" style={containerStyle}>
                <div class="row" style={navStyle}>
                    <h1>newslist.co</h1>
                    { this.props.children }
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}
Layout.displayName = 'Layout';


// Layout.defaultProps = {
// };

