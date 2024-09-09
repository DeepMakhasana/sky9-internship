import { Component } from "react";
import User from "./components/User";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "xyz",
      email: "xyz@gmail.com",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("component did mount");
    this.setState({ name: "mount", email: "mount@gmail.com" });
  }

  componentDidUpdate() {
    // this.setState({ name: "unmount", email: "unmount@gmail.com" })
    console.log("component did update");
  }

  shouldComponentUpdate(preProp, preState) {
    if (preState.name != this.state.name) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    this.setState({
      name: "unmount",
      email: "unmount@gmail.com",
    });
    console.log("unmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>
          App - {this.state.name} - {this.state.email}
        </p>
        <User name={this.state.name} email={this.state.email} />
        <button onClick={() => this.setState({ name: "abc" })}>
          update state
        </button>
      </div>
    );
  }
}

export default App;
