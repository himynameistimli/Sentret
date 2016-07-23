import React from 'react';
require('styles/layout/Footer.scss');


export default class Footer extends React.Component {
  render() {
    return (
        <footer>
            <div class='row'>
                <p>Copyright &copy; newslist.co</p>
            </div>
        </footer>
    );
  }
}
