'use strict';

import React from 'react';
import CollectionItem from './collection/CollectionItem'
require('styles/gallery/Collection.scss');

export default class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : []
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem( title ) {
    this.setState({
      items: [].concat(this.state.items).concat([<CollectionItem title={title}/>])
    })
  }


  render() {

    const { title } = this.props;
    // console.log('this is my props', this.props);
    // console.log('this is my state', this.state.items);
    // const Items = [
    //   'Some Article',
    //   'Some Other Article',
    //   'Yet Another Article',
    //   'Still More',
    //   'Some Article',
    //   'Some Other Article',
    //   'Yet Another Article',
    //   'Still More',
    //   'Some Article',
    //   'Some Other Article',
    //   'Yet Another Article',
    //   'Still More'
    // ].map((title, i) => <CollectionItem key={i} title={title}/> );

    return (
      <div className="collection">
        <div class="row">
            <div className="collection__title">{ title }</div>
            { this.state.items }
        </div>
      </div>
    );
  }
}
Collection.propTypes = {
  title: React.PropTypes.array.isRequired
};
Collection.displayName = 'Collection';

