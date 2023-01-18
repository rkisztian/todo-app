import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

interface TodoItem {
  todo: string;
  day: string;
}

interface State {
  todo: string;
  todos: TodoItem[];
  day: string;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      todo: "",
      todos: [],
      day: "",
    };
  }

  gettodo = () => {
    let dolgaim = this.state.todo;
    let nap = this.state.day;

    this.setState({
      todos: [{ todo: dolgaim, day: nap }, ...this.state.todos],
      todo: "",
      day: "",
    });
  };

  render() {
    return (
      <div>
        <div className="mezo">
          <p>
            Adja meg a teendőket:
            <input
              type="text"
              value={this.state.todo}
              onChange={(e) => {
                this.setState({ todo: e.currentTarget.value });
              }}
            ></input>
          </p>
          <p>
            Melyik napra szól a teendők:
            <input
              type="text"
              value={this.state.day}
              onChange={(e) => {
                this.setState({ day: e.currentTarget.value });
              }}
            ></input>{" "}
          </p>
          <button onClick={this.gettodo}>Feltöltés</button>
        </div>

        <div className="container-fluid">
          <div className="row">
            {this.state.todos.map((todo) => (
              <div className="card col-4">
                <div className="card-title">{todo.day}</div>
                <div className="card-subtitle mb-2 text-muted">Teendők:</div>
                <div className="card-text">
                  <div>{todo.todo}</div>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
