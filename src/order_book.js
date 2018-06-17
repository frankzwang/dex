import React, { Component } from 'react';
import './App.css';
import { Aqueduct } from 'aqueduct'; 
import $ from 'jquery';


class OrderBook extends Component {

    constructor(props){
        super(props); 
        this.state = {
            baseToken: "0x",
            baseTokenAddress: "0xe41d2489571d322189246dafa5ebde1f4699f498",
            quoteTokenAddress: "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0",
            quoteToken: "EOS",
            addressList: {
                "EOS": "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0",
                "TRX": "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
                "VET": "0x628c92CFAb21C93820751C6278f5A0cEF745676A",
                "ICX": "0xb5A5F22694352C15B00323844aD545ABb2B11028",
                "BNB": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
                "OMG": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
                "ZIL": "0x05f4a42e251f2d52b8ed15E9FEdAacFcEF1FAD27",
                "AE": "0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d",
            },
            orderBook: [],
        };
        this.handleClick = this.handleClick.bind(this);
       
    }

    componentDidMount(){
        Aqueduct.Initialize();
        let orders, orderBook; 
        let fn = this; 
        (() => {
            orders = new Aqueduct.Api.OrdersService().get({
                networkId: 1,
                baseTokenAddress: fn.state.baseTokenAddress,
                quoteTokenAddress: fn.state.quoteTokenAddress,
                sortOrder: "price",
                includeExternal: true,
            }).then(result => {
                console.log(result);
                orderBook = result.map(order => {
                    return (
                        <div>
                            {order.price}
                        </div>
                    );
                });
                this.setState({ orderBook: orderBook });
            });
        })();
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.quoteToken === prevState.quoteToken){
           
        }else{
            Aqueduct.Initialize();
            let orders, orderBook;
            let fn = this;
            (() => {
                orders = new Aqueduct.Api.OrdersService().get({
                    networkId: 1,
                    baseTokenAddress: fn.state.baseTokenAddress,
                    quoteTokenAddress: fn.state.quoteTokenAddress,
                }).then(result => {
                    console.log(result);
                    orderBook = result.map(order => {
                        return (
                            <div>
                                {order.price}
                            </div>
                        );
                    });
                    console.log(orderBook);
                    this.setState({ orderBook: orderBook });
                });
            })();
        }
    }
    
    handleClick(name){
        this.state.addressList[name];
        this.setState({
            quoteToken: name,
            quoteTokenAddress: this.state.addressList[name],
        });
    }

    render() {
        
        console.log(this.state);
        return (
            <div className="order-book">
                <p>orderbook</p>
                <form action="" method="post">
                    <a name="EOS" onClick={() => this.handleClick("EOS")}>0x</a>
                    <a name="TRX" onClick={() => this.handleClick("TRX")}>TRX</a>
                    <a name="VET" onClick={() => this.handleClick("VET")}>VET</a>
                    <a name="ICX" onClick={() => this.handleClick("ICX")}>ICX</a>
                    <a name="BNB" onClick={() => this.handleClick("BNB")}>BNB</a>
                    <a name="OMG" onClick={() => this.handleClick("OMG")}>OMG</a>
                    <a name="ZIL" onClick={() => this.handleClick("ZIL")}>ZIL</a>
                    <a name="AE" onClick={() => this.handleClick("AE")}>AE</a>
                </form>
                {this.state.orderBook}
            </div>
        );
    }
}

export default OrderBook;