import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isError: false
    }
  }
  async componentDidMount() {
    const response =
      await fetch('https://y5ujgva9k3.execute-api.us-east-2.amazonaws.com/price/' + this.props.value)
    if (response.ok) {
      const data = await response.json()
      console.log(data.Items)
      this.setState({ items: data.Items })
    } else {
      this.setState({ isError: true })
    }
  }

  renderTableHeader = () => {
    return Object.keys(this.state.items[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  renderTableRows = () => {
    console.log(this.state.items);
    return this.state.items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.model}</td>
          <td>{item.marketName}</td>
          <td>{item.commodityName}</td>
          <td>{item.maximum}</td>
          <td>{item.varietyName}</td>
          <td>{item.purchaseBy}</td>
          <td>{item.minimum}</td>
          <td>{item.dateVal}</td>
          <td>{item.id}</td>
          <td>{item.arrivals}</td> 
        </tr>
      )
    })
  }

  render() {
    const { items, isError } = this.state

    if (isError) {
      return <div>Error</div>
    }

    return items.length > 0
      ? (
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </ReactBootStrap.Table>
      ) : (
        <div>
          No item.
        </div>
      )
  }

}



export default Table;
