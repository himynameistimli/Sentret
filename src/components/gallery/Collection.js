'use strict';

import React from 'react';
import CollectionItem from './collection/CollectionItem'
require('styles/gallery/Collection.scss');

export default class Collection extends React.Component {
  render() {

    const { title } = this.props;

    const Items = [
      'Some Article',
      'Some Other Article',
      'Yet Another Article',
      'Still More',
      'Some Article',
      'Some Other Article',
      'Yet Another Article',
      'Still More',
      'Some Article',
      'Some Other Article',
      'Yet Another Article',
      'Still More'
    ].map((title, i) => <CollectionItem key={i} title={title}/> );

    return (
      <div className="collection">
        <div class="row">
            { Items }
        </div>
      </div>
    );
  }
}

Collection.displayName = 'Collection';

