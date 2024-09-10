import React, { Component } from "react";
import { dataShoe } from "./dataShoe";
import ListShoe from "./ListShoe";
import Cart from "./Cart";

export default class ExShoe extends Component {
  state = {
    cart: [],
    listShoe: dataShoe,
  };
  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === shoe.id);
    if (index !== -1) {
      cloneCart[index].total++;
    } else {
      cloneCart.push({ ...shoe, total: 1 });
    }
    this.setState({
      cart: cloneCart,
    });
  };
  handleChangeTotal = (idShoe, option) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === idShoe);
    cloneCart[index].total += option;
    this.setState({
      cart: cloneCart,
    });
  };
  handleDeleteCart = (idShoe) => {
    console.log("🚀 ~ idShoe:", idShoe);
    let { cart } = this.state;
    let newCart = cart.filter((shoe) => shoe.id !== idShoe);
    this.setState({
      cart: newCart,
    });
  };
  render() {
    let { listShoe, cart } = this.state;
    return (
      <div className="row align-items-start">
        <ListShoe shoeArr={listShoe} handleClickAdd={this.handleAddToCart} />
        <Cart
          handleChangeTotal={this.handleChangeTotal}
          dataCart={cart}
          handleDelete={this.handleDeleteCart}
        />
      </div>
    );
  }
} 
