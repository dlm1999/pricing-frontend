import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isError: false
    }
  }
  componentDidMount() {
    this.setState = {
      items: this.props.items
    }
  }

  renderTableHeader = () => {
    return Object.keys(this.state.items[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  renderTableRows = () => {
    return this.state.items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.commodityName}</td>
          {/* <td>{item.VarietyName}</td>
          <td>{item.MarketName}</td>
          <td>{item.Arrivals}</td>
          <td>{item.Maximum}</td>
          <td>{item.Minimum}</td>       
          <td>{item.PurchaseBy}</td> */}
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
        <table>
          <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      ) : (
        <div>
          No item.
        </div>
      )
  }

}



export default Table;
