import React, { Component } from 'react';
import './App.css';
import { Aqueduct } from 'aqueduct'; 



class OrderBook extends Component {

    constructor(props){
        super(props); 
        this.state = {
            baseTokenAddress: "0xe41d2489571d322189246dafa5ebde1f4699f498",
            quoteTokenAddress: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            orderBook: [],
        };
        this.handleClick = this.handleClick.bind(this);
       
    }

    componentDidMount(){
        Aqueduct.Initialize();
    }
    
    handleClick(){

    }

    render() {

let orders, orderBook; 
let fn = this; 
console.log(this.state.orderBook);

if(this.state.orderBook){
    if(this.state.orderBook.length === 0){
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
        });
    })();
        this.setState({ orderBook: orderBook });
    }
}

        
        return (
            <div>
                <p>orderbook</p>
                {orderBook}
            </div>
        );
    }
}

export default OrderBook;