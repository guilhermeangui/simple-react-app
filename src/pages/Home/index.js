import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import './index.sass'
Modal.setAppElement('body')

console.log( `API KEY ${process.env.NODE_ENV} =>`, process.env[`REACT_APP_API_URL_${process.env.NODE_ENV}`] )

class Home extends Component {  
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="home">
        <h1 className="home__title primary-color"> Title H1 <FontAwesomeIcon icon="check-square" /> </h1>
        <h2 className="home__title secondary-color"> Title H2 </h2>
        <h3 className="home__title accent-color"> Title H3 </h3>
        <h4 className="home__title highlight-color"> Title H4 </h4>
        <h5 className="home__title black background-light"> Title H5 </h5>
        <h6 className="home__title white background-black"> Title H6 </h6>

        <Link to="/SubPage">dale link</Link>
        
        <button onClick={this.handleOpenModal}>Trigger Modal</button>  
        <Modal 
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <p>Texto da modal</p>
          <button onClick={this.handleCloseModal}>Fechar Modal</button>
        </Modal>

      </div>
    );
  }
}
export default Home;