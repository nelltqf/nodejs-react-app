import React, {Component} from 'react';
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: {},
            search: "",
            name: "",
            age: ""
        }
    }

    checkRequestStatus = response => {
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return response;
    };

    handleChange = fieldName => {
        return event => {
            this.setState({
                [fieldName]: event.target.value
            });
        };
    };

    getData = () => {
        fetch(`http://localhost:3000/test/${this.state.search}`)
            .then(this.checkRequestStatus)
            .then(result => result.json())
            .then(result => this.setState({response: result}))
    };

    sendData = () => {
        console.log(this.state);
        fetch("http://localhost:3000/test", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": this.state.name,
                "age": this.state.age
            })
        })
            .then(this.checkRequestStatus)
            .then(result => result.json())
    };

    render() {
        return (
            <div className="form">
                Name:
                <input value={this.state.name} onChange={this.handleChange("name")}/>
                Age:
                <input value={this.state.age} onChange={this.handleChange("age")}/>
                <button onClick={this.sendData}>Send</button>
                <br/>
                Find data:
                <input value={this.state.search} onChange={this.handleChange("search")}/>
                <button onClick={this.getData}>Search</button>
                Name: {this.state.response.name}
                Age: {this.state.response.age}
            </div>
        );
    }
}

export default App;