import React, { Component } from 'react';
import './App.css';
import Table from './components/Table/Table';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      items: []
    }
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  async handleClick(e) {
    console.log(this.state.value);
    const response =
      await fetch('https://k7xtuyylg7.execute-api.us-east-2.amazonaws.com/Api_deploy/id/' + this.state.value)
    if (response.ok) {
      const items = await response.json()
      console.log(items)
    } else {
      this.setState({ isError: true })
    }
  }
  render() {
    return (
      <div className='App'>
        <div>
          <input value={this.state.value} onChange={(e) => { this.handleChange(e) }} />
          <button onClick={this.handleClick.bind(this)}>Go !</button>
        </div>
        <Table items = {this.state.items}/>
      </div>
    );
  }
}

export default App;
