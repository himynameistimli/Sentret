import React from 'react';

import Collection from '../components/gallery/Collection';
require('styles/pages/Gallery.scss');


export default class Gallery extends React.Component {
    render() {

    const Collections = [
      'Tech In Asia',
    ].map((title, i) => <Collection key={i} title={title}/> );

        // constants go here
        return (
            <div className="gallery">
                <div class="gallery__container">
                    <div class="row">
                        { Collections }
                    </div>
                </div>
            </div>
        )
    }





}
