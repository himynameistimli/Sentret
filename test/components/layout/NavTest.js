/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Nav from 'components/layout/Nav.js';

describe('Nav', () => {
    let component, button;

    beforeEach(() => {
        component = createComponent(Nav);

        // button = TestUtils.renderIntoDocument(
        //     <Nav />
        // );
    });

    // it('should toggle collapse menu when set', () => {
    //     let navButton = TestUtils.findRenderedDOMComponentWithClass(button, 'navbar-toggle');
    //     TestUtils.Simulate.click(navButton)
    //     expect(component.state.collapsed).to.equal(true);
    // });

    it('should have its component name as tagName', () => {
        expect(component.type).to.equal('nav');
    });


});
