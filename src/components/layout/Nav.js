import React from 'react';
import { IndexLink } from 'react-router';
// import { Link } from 'react-router';
require('styles/layout/Nav.scss');

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        // const { location } = this.props;
        const { collapsed } = this.state;

        /**
         * TODO
         * CSS----------
         * add class to nav
         * add navbar-header to css
         * add navbar-toggle to css
         * Other ---------
         * Remove onClick
        **/

        return (
            <nav class="" role="navigation">
                <div class="container">
                    <div class="nav__header">
                        <div class="nav__title"> News List </div>
                    </div>
                </div>
            </nav>
        );
    }


}
