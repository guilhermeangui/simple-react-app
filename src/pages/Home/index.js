import React, { Component } from 'react';

import './index.sass'

class Home extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__test"> Title H1 </h1>
        <h2 className="header__test"> Title H2 </h2>
        <h3 className="header__test"> Title H3 </h3>
        <h4 className="header__test"> Title H4 </h4>
        <h5 className="header__test"> Title H5 </h5>
        <h6 className="header__test"> Title H6 </h6>
      </div>
    );
  }
}
export default Home;