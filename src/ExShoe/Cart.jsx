import React, { Component } from "react";
// let data = {};
export default class Cart extends Component {
  renderTable = () => {
    let { dataCart, handleDelete, handleChangeTotal } = this.props;
    return dataCart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <img width={100} src={item.image} alt="" />
          </td>
          <td>{item.price}</td>
          <td>
            <button
              onClick={() => {
                handleChangeTotal(item.id, -1);
              }}
              className="btn btn-warning"
            >
              -
            </button>
            <strong className="mx-2">{item.total}</strong>
            <button
              onClick={() => {
                handleChangeTotal(item.id, 1);
              }}
              className="btn btn-info"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
              className="btn btn-dark"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
        {this.props.dataCart.length === 0 && (
          <h3 className="text-center ">No items to display</h3>
        )}
      </div>
    );
  }
}
