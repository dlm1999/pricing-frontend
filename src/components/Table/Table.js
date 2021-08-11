import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { CSVExport} from 'react-bootstrap-table2-toolkit';


class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isError: false,
      columns: [{  
                  dataField: 'commodityName',  
                  text: 'COMMODITY NAME',
                  sort: true,
                  filter: textFilter()  
                },  
                {  
                  dataField: 'varietyName',  
                  text: 'VARIETY NAME',  
                  sort: true,
    
                }, 
                {  
                  dataField: 'marketName',  
                  text: 'MARKET NAME',  
                  sort: true,  
                },  
                {  
                  dataField: 'arrivals',  
                  text: 'ARRIVALS(qtls)',  
                  sort: true,  
                },  
                {  
                  dataField: 'maximum',  
                  text: 'MAXIMUM (IN Rs)',  
                  sort: true  
                },  
                {  
                  dataField: 'minimum',  
                  text: 'MINIMUM (IN Rs)',  
                  sort: true  
                },  
                {  
                  dataField: 'model',  
                  text: 'MODEL',  
                  sort: true,  
                },  
                {  
                  dataField: 'purchaseBy',  
                  text: 'PURCHASE BY',    
                }]
    }
  }

  async componentDidMount() {
    const response =
      await fetch('https://lr5wmb96oj.execute-api.us-east-2.amazonaws.com/price/' + this.props.value)
    if (response.ok) {
      const data = await response.json()
      console.log(data.Items)
      this.setState({ items: data.Items })
    } else {
      this.setState({ isError: true })
    }
  }

  /*renderTableHeader = () => {
    let header = ["commodity Name","variety Name","market Name","arrivals(qtls)","maximum","minimum","model","purchase By"]
      return header.map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  renderTableRows = () => {
    console.log(this.state.items);
    return this.state.items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.commodityName}</td>
          <td>{item.varietyName}</td>
          <td>{item.marketName}</td>
          <td>{item.arrivals}</td>
          <td>Rs {item.maximum}</td>
          <td>Rs {item.minimum}</td>
          <td>{item.model}</td>
          <td>{item.purchaseBy}</td> 
        </tr>
      )
    })
  }*/

  render() {  
                return (  
                        <div className="container">      
                        <div  style={{ marginTop: 20 }}>  
                        <BootstrapTable 
                        bootstrap4  
                        striped  
                        hover  
                        keyField='id'   
                        data={ this.state.items}   
                        columns={ this.state.columns }
                        filter = {filterFactory()} />  
                      </div>  
                      </div>  
                )  
        }


}




export default Table;
