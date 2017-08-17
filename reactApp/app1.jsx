import React from 'react';
import Child from './child.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temp: "", name: "", array: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }
  
  handleChange(event) {
    this.setState({temp: event.target.value.trim()});
  }

  handleButton(event) {
    function check(element) {
      return element == event.target.value;

    }

    if (!this.state.array.find(check)) { 
      this.state.array.push(event.target.value.trim());
      this.setState({name: event.target.value.trim()});
    }
  }
  render() {
    return (
      <form >
        <label>
          Name:
          <input value = {this.state.temp} type="text"  onChange={this.handleChange}/>
        </label>
        <p>
          <button type="button" value = {this.state.temp} onClick={this.handleButton}>Submit</button>
        </p>
        <Child myName = {this.state.array}></Child>
      </form>
    );
  }
}

export default App;
   
