import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    // this.setState({
    //   users: ["test user", "test user2"],
    //   username: "test user"
    // });
    axios.get("http://localhost:5000/users/").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        });
      }
    });
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleDuration = e => {
    this.setState({
      duration: e.target.value
    });
  };

  handleDate = date => {
    this.setState({
      date: date
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };

    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then(res => console.log(res.data));

    this.setState({
      username: "",
      description: "",
      duration: 0,
      date: new Date()
    });
    // window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Select Username</label>
            <select
              className="form-control"
              // useref="userInput"
              // required
              value={this.state.username}
              onChange={this.handleUsername}
            >
              {this.state.users.map(user => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <div>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.handleDescription}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Duration (in Minutes)</label>
            <div>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.duration}
                onChange={this.handleDuration}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Date</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.handleDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateExercise;
