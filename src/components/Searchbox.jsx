import React, { useState } from "react";

function Searchbox(props) {
  const [city, setCity] = useState("");
  function handleChange(event) {
    setCity(event.target.value);
  }

  function sendData(event) {
    props.onRightAdd(city);
    event.preventDefault();
  }

  return (
    <div>
      <input
        className="search"
        type="text"
        onChange={handleChange}
        value={city}
        placeholder="Enter City"
      />
      <button className="searchicon" type="submit" onClick={sendData}>
        <i class="fa fa-search" />
      </button>
    </div>
  );
}

export default Searchbox;
