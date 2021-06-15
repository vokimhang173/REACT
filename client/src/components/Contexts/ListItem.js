import React, { Component } from 'react';
import {FaEdit,FaTrash } from 'react-icons/fa';
import axios from 'axios';

export default class ListItem extends Component {
    constructor() {
        super();
        this.state = { products: [] }
    }
    async componentDidMount() {
        await fetch('http://localhost:5000/product') 
        .then(res => res.json()) 
        .then((data) => 
            { this.setState({ products: data }) 
        }).catch(console.log)
    }
    renderProducts = () => {
        let products = this.state.products.map((data, index) =>
        <tr>
            <td>{data.Name}</td>
            <td><a href={"edit/"+data._id}><FaEdit></FaEdit></a></td>
            <td><a href={"delete/"+data._id}><FaTrash></FaTrash></a></td>
        </tr>
         ); 
        return products; }
  render() {
    return (
      <div>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h3>Danh sách sản phẩm</h3>
            <div class="btn-toolbar mb-2 mb-md-0">
                
                <a href="add"><button type="button" class="btn btn-sm btn-outline-secondary">
                        Add new
                    </button></a>
            </div>
        </div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Edit</th>
              <th>Xoa</th>
            </tr>
          </thead>
          <tbody>
          {this.renderProducts()}
          </tbody>
        </table>
      </div>
    )
  }
}