import React, { Component } from 'react';
import './App.css';
import Table from './components/Table/Table';
import ToolkitProvider, { CSVExport} from 'react-bootstrap-table2-toolkit';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      items: [],
      click : false
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  async handleClick(e) {
    this.setState({click : true})
  }

  render() {
    return (
      <div className='App'>
        <div>
          <input value={this.state.value} onChange={(e) => { this.handleChange(e) }} />
          <button onClick={this.handleClick.bind(this)}>Go !</button>
        </div>
        <div>
          <h1>Jeevamrut Pricing Table</h1>
        </div>
        {this.state.click ? <Table value = {this.state.value}></Table> : ""}      
      </div>
    );
  }
}

export default App;
