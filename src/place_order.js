import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class PlaceOrder extends Component {
    render() {
        return (
            <div class="w3-panel w3-text-grey">
                <h4>PLACE ORDER</h4>
                <form action="" method="post">
                    <input id="number1" type="number"/>
                        <select name="place1" onmousedown="if(this.options.length>5){this.size=5;}" onchange='this.size=0;' onblur="this.size=0;">
                            <option value="EOS">EOS</option>
                            <option value="TRX">TRX</option>
                            <option value="VET">VET</option>
                            <option value="ICX">ICX</option>
                            <option value="BNB">BNB</option>
                            <option value="OMG">OMG</option>
                            <option value="ZIL">ZIL</option>
                            <option value="AE">AE</option>
                        </select>
                    <input id="number2" type="number"/>
                        <select name="place2" onmousedown="if(this.options.length>5){this.size=5;}" onchange='this.size=0;' onblur="this.size=0;">
                            <option value="EOS">EOS</option>
                            <option value="TRX">TRX</option>
                            <option value="VET">VET</option>
                            <option value="ICX">ICX</option>
                            <option value="BNB">BNB</option>
                            <option value="OMG">OMG</option>
                            <option value="ZIL">ZIL</option>
                            <option value="AE">AE</option>
                        </select>
                        <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default PlaceOrder;