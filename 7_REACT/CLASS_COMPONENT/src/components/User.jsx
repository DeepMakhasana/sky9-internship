import { Component } from "react";

class User extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <h1>User component</h1>
                <p>Name: {this.props.name}</p>
                <p>Name: {this.props.email}</p>
            </div>
        )
    }
}

export default User;