/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Footer from 'components/layout/Footer.js';

describe('Footer', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Footer);
  });

  it('should have its component name as default className', () => {
    expect(component.type).to.equal('footer');
  });
});
