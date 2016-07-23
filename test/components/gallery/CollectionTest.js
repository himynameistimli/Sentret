/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';

import React from 'react';
import { shallow, mount } from 'enzyme';
// import createComponent from 'helpers/shallowRenderHelper';
import Collection from 'components/gallery/Collection.js';

describe('Collection', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Collection/>);
  });

  // What to test
  // It must render
  // Test the output
  // Test the states
  // Test the events
  // Test the edge cases

  it('should have its component name as default className', () => {
    expect(component.find('.collection')).to.have.length(1);
  });

  it('should start with an empty list', () => {
    expect(component.state('items')).to.eql([]);
  })

  it('should add an item to the list of items', () => {
    component.instance().addItem('Sam Adams')
    console.log('item',component.state('items'))
    expect(component.state('items')[0].props.title).to.eql('Sam Adams');
    // expect(component.containsMatchingElement(<CollectionItem/>)).to.equal(true);
    // expect(component.state('items')).to.equal([<CollectionItem title='Sam Adams'/>]);
  })

  // it('should render a render a CollectionItem', () => {
  //   // const wrapper = shallow(<Collection/>);
  //   // console.log('wrapper', wrapper);
  //   expect(component.containsAllMatchingElements([
  //     <CollectionItem/>
  //     ])).to.equal(true);
  // });

});
