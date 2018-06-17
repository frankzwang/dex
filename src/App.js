import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlaceOrder from './place_order.js';
import FillOrder from './fill_order.js';
import OrderBook from './order_book.js';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="w3-row">
          <div className="w3-container">
            <h1 className="w3-jumbo">Decentralized Token Exchange</h1>
          </div>
        </div>
        <PlaceOrder/>
        <FillOrder/>
        <OrderBook/>
        <div class="w3-third w3-container w3-black w3-large">
          <h2>Contact Info</h2>
          <p><i class="fa fa-map-marker"></i> San Francisco, US</p>
          <p><i class="fa fa-phone" ></i> Phone: +00 00000</p>
          <p><i class="fa fa-envelope"> </i> Email: mail@mail.com</p>
        </div>
        <div class="w3-third w3-center w3-large w3-dark-grey w3-text-white">
          <h2>Contact Us</h2>
          <p>If you have an idea.</p>
          <p>What are you waiting for?</p>
        </div>
        <div class="w3-third w3-center w3-large w3-grey w3-text-white">
          <h2>Like Us</h2>
          <i class="w3-xlarge fa fa-facebook-official"></i><br />
          <i class="w3-xlarge fa fa-pinterest-p"></i><br />
          <i class="w3-xlarge fa fa-twitter"></i><br />
          <i class="w3-xlarge fa fa-flickr"></i><br />
          <i class="w3-xlarge fa fa-linkedin"></i>
        </div>
      <div class="w3-container w3-text-grey">
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
      </div>
      </div>
    );
  }
}

export default App;
