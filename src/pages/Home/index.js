import React, { Component } from 'react';

import './index.sass'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="home__title primary-color"> Title H1 </h1>
        <h2 className="home__title secondary-color"> Title H2 </h2>
        <h3 className="home__title accent-color"> Title H3 </h3>
        <h4 className="home__title highlight-color"> Title H4 </h4>
        <h5 className="home__title black background-light"> Title H5 </h5>
        <h6 className="home__title white background-black"> Title H6 </h6>
      </div>
    );
  }
}
export default Home;