/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Layout from 'pages/Layout.js';

describe('Layout', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Layout);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('layout');
  });
});
