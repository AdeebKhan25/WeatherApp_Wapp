import React, { useState } from "react";

function Left(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  let wd = days[date.getDay()];
  let d = date.getDate();
  let mo = months[date.getMonth()];
  let year = date
    .getFullYear()
    .toString()
    .substring(2, 4);
  let initial_val =
    h + ":" + m + " - " + wd + ", " + d + " " + mo + ", '" + year;
  const [val, setVal] = useState(initial_val);

  function getTimeAndDate() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    if (m < 10) {
      m = "0" + m;
    }
    let wd = days[date.getDay()];
    let d = date.getDate();
    let mo = months[date.getMonth()];
    let year = date
      .getFullYear()
      .toString()
      .substring(2, 4);

    let newVal = h + ":" + m + " - " + wd + ", " + d + " " + mo + ", '" + year;
    setVal(newVal);
  }

  setInterval(getTimeAndDate, 60000);
  var intTemp = Math.trunc(props.sendTemp);
  return (
    <div className="leftbox col-lg-8">
      <h1 className="title">Wapp</h1>
      <h6 className="author">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by Adeeb Khan
      </h6>
      <div className="leftdata row">
        <div className="col-lg-3">
          <h1 className="temp">{intTemp + "°"}</h1>
        </div>
        <div className="citytime col-lg-9">
          <h1 className="city">{props.sendCity}</h1>
          <p className="time">{val}</p>
        </div>
      </div>
    </div>
  );
}

export default Left;
