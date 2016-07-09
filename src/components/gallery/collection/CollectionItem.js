'use strict';

import React from 'react';

require('styles/gallery/collection/Item.scss');

export default class ItemComponent extends React.Component {
  render() {

    const { title } = this.props;

    const itemStyle = {
      width: '32%'
    };

    return (
      <div className="item" style={itemStyle}>
        <h4>{title}</h4>
        <p> This is an article snippet </p>
        <a class="" href="#"> More </a>
      </div>
    );
  }
}

ItemComponent.displayName = 'Item';

// Uncomment properties you need
// ItemComponent.propTypes = {};
// ItemComponent.defaultProps = {};

