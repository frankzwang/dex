import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class FillOrder extends Component {
    render() {
        return (
            <div class="w3-panel w3-text-grey">
                <h4>FILL ORDER</h4>
                <form action="" method="post">
                    <select name="fill1" onmousedown="if(this.options.length>5){this.size=5;}" onchange='this.size=0;' onblur="this.size=0;">
                        <option value="EOS">EOS</option>
                        <option value="TRX">TRX</option>
                        <option value="VET">VET</option>
                        <option value="ICX">ICX</option>
                        <option value="BNB">BNB</option>
                        <option value="OMG">OMG</option>
                        <option value="ZIL">ZIL</option>
                        <option value="AE">AE</option>
                    </select>
                    <select name="fill2" onmousedown="if(this.options.length>5){this.size=5;}" onchange='this.size=0;' onblur="this.size=0;">
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

export default FillOrder;