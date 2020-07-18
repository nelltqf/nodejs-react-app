import React, {Component}  from 'react';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			response: "AAA"
		}
	}

	getData() {
		fetch("http://localhost:3000/test")
		.then(result => result.text())
		.then(result => this.setState({ response: result }))
		.catch(error => {
  			console.error('Error:', error);
		});
	};

	componentDidMount() {
		this.getData();
	}

    render() {
    	console.log(this.state.response);
        return (
            <div>{this.state.response}</div>
        );
    }
}

export default App;