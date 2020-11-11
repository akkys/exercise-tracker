import React, { Component } from "react";
import axios from "axios";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            users: res.data
          });
        }
      })
      .catch(error => console.log(error));
  }

  deleteUser = id => {
    axios
      .delete("http://localhost:5000/users/" + id)
      .then(res => console.log(res.data));

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    });
  };

  usersList() {
    return this.state.users.map(currentuser => {
      return (
        <tr key={currentuser._id}>
          <td>{currentuser.username}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteUser(currentuser._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.usersList()}</tbody>
        </table>
      </div>
    );
  }
}

export default UsersList;
