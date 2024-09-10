import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="col-3">
        <img className="w-100" src={data.image} alt="" />
        <button
          onClick={() => {
            this.props.handleClickAdd(data);
          }}
          className="btn btn-danger"
        >
          Add
        </button>
      </div>
    );
  }
}
