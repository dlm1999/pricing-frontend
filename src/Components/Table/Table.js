import React from 'react';
import * as ReactBootstrap from "react-bootstrap";

const Table = ()=> {
  const items =[
  {CommodityName: "paddy", VarietyName:"Common (Hamsa)", MarketName:"Narayanpet", Arrivals: "54", Maximum:"1420",Minimum: "1411", PurchaseBy: "PT"},
  {CommodityName: "paddy", VarietyName:"Common (Hamsa)", MarketName:"Mahaboobnagar", Arrivals: "4", Maximum:"1457",Minimum: "1457", PurchaseBy: "PT"},
  {CommodityName: "paddy", VarietyName:"Common (Hamsa)", MarketName:"Narayanpet", Arrivals: "54", Maximum:"1420",Minimum: "1411", PurchaseBy: "PT"},
  {CommodityName: "paddy", VarietyName:"Common (Hamsa)", MarketName:"Mahaboobnagar", Arrivals: "4", Maximum:"1457",Minimum: "1457", PurchaseBy: "PT"},
  {CommodityName: "paddy", VarietyName:"Common (Hamsa)", MarketName:"Narayanpet", Arrivals: "54", Maximum:"1420",Minimum: "1411", PurchaseBy: "PT"},
  {CommodityName: "paddy", VarietyName:"Common (Hamsa)", MarketName:"Mahaboobnagar", Arrivals: "4", Maximum:"1457",Minimum: "1457", PurchaseBy: "PT"}
  ]
  const renderItem = (item, index) =>{
    return(
      <tr key = {index}>
        <td>{item.CommodityName}</td>
        <td>{item.VarietyName}</td>
        <td>{item.MarketName}</td>
        <td>{item.Arrivals}</td>
        <td>{item.Maximum}</td>
        <td>{item.Minimum}</td>       
        <td>{item.PurchaseBy}</td>
      </tr>
    )                  
  }
  render(){
  	return (
    <div>
      <div className = "pa3">
        <h1>Jeevamrut Pricing Table</h1>
      </div>  
    <ReactBootstrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Commodity Name</th>
      <th>Variety Name</th>
      <th>Market Name</th>
      <th>Arrivals(Qtls)</th>
      <th>Maximum</th>
      <th>Minimum</th>
      <th>Purchase By</th>
    </tr>
  </thead>
  <tbody>
    {items.map(renderItem)}
  </tbody>
</ReactBootstrap.Table>
    </div>
  );
 }
  
}

export default Table;

