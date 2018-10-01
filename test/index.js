import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/scss/bootstrap.scss';

import Text from './text.md';

const root = document.body.appendChild(document.createElement('div'));

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>
            @politico/markdown-react-loader
          </a>
        </nav>
        <div className='container'>
          <hr />
          <Text linkTarget='_blank' context={{
            latin: 'Introibo ad altare Dei.',
            sections: ['The Tower', 'The School', 'The Strand'],
          }} />
          <hr />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TestComponent />, root);
