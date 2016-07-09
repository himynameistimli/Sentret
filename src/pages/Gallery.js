import React from 'react';

import Collection from '../components/gallery/Collection';

export default class Gallery extends React.Component {
    render() {

    const Collections = [
      'Tech In Asia',
      'e27'
    ].map((title, i) => <Collection key={i} title={title}/> );

        // constants go here
        return (
            <div className="gallery">
                <div class="row">
                    { Collections }
                </div>
            </div>
        )
    }





}