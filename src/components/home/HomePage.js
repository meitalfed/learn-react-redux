import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Some Title</h1>
        <p>some text</p>
        <Link to="About" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
