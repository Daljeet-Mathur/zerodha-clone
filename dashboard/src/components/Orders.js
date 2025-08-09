import React, {useEffect, useState} from "react";
import axios from "axios";

// import { Link } from "react-router-dom";

const Orders = () => {

   const [addOders, setAddOders] = useState([]);
     
       useEffect(() => {
         axios.get("https://zerodha-clone-2-jgdg.onrender.com").then((res) => {
          //  console.log(res.data);
           setAddOders(res.data);
         });
       }, []);

  return (
    <div className="orders">
      <h3 className="title">Oders ({addOders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>price.</th>
            <th>mode</th>
          </tr>

          {addOders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Orders;
