import React from 'react';
import { IndexLink } from 'react-router';
// import { Link } from 'react-router';

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

        // TODO: Don't forget to add this class in CSS
        const navClass = collapsed ? 'collapse' : '';

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
                    <div class="navbar-header">
                        <button type="" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                            <span> toggle nav </span>
                        </button>
                    </div>
                    <div class={'navbar-collapse' + navClass}>
                        <ul>
                            <li activeClassName="active" onlyActiveonIndex={true}>
                                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}> Gallery </IndexLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }


}
