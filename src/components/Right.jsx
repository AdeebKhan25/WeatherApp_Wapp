import React from "react";
import Searchbox from "./Searchbox";
import List from "./List";

function Right(props) {
  return (
    <div className="rightbox col-lg-4">
      <form className="formclass">
        <Searchbox onRightAdd={props.onAdd} />
      </form>
      <hr />
      <h6 className="weatherdetails">Weather Details</h6>
      <List
        wth={props.sendWeather}
        des={props.sendDescrp}
        prs={props.sendPres}
        hum={props.sendHumid}
      />
    </div>
  );
}

export default Right;
