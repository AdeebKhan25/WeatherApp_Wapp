import React from "react";

function List(props) {
  return (
    <div>
      <table>
        <tr>
          <td>Weather</td>
          <td>{props.wth}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{props.des}</td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td>{props.prs}</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{props.hum}</td>
        </tr>
      </table>
    </div>
  );
}

export default List;
