import React, { useState, useEffect } from "react";
import axios from "axios";
import Left from "./Left";
import Right from "./Right";

function App() {
  const image = {
    _01d:
      "https://images.unsplash.com/photo-1525490829609-d166ddb58678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    _01n:
      "https://images.unsplash.com/photo-1503330936140-b3a87ed1b1eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1187&q=80",
    _02d:
      "https://images.unsplash.com/photo-1523882505971-5c29b55b695c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    _02n:
      "https://images.unsplash.com/photo-1501418611786-e29f9929fe03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    _03d:
      "https://images.unsplash.com/photo-1501071431528-9a5b594a79a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80",
    _03n:
      "https://images.unsplash.com/photo-1589763472885-46dd5b282f52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    _04d:
      "https://images.unsplash.com/uploads/14125383307942ca04b48/2c169440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
    _04n:
      "https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
    _09d:
      "https://images.unsplash.com/photo-1527766833261-b09c3163a791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    _09n:
      "https://images.unsplash.com/photo-1554345112-711412c9aa5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    _10d:
      "https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    _10n:
      "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    _11d:
      "https://images.unsplash.com/photo-1594233730675-8e01ad21399e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1929&q=80",
    _11n:
      "https://images.unsplash.com/photo-1561485132-59468cd0b553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80",
    _13d:
      "https://images.unsplash.com/photo-1484799064784-29cbee7e252a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    _13n:
      "https://images.unsplash.com/photo-1504805402391-d11b68988fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    _50d:
      "https://images.unsplash.com/photo-1482841628122-9080d44bb807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    _50n:
      "https://images.unsplash.com/photo-1549463314-28826e21a526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1102&q=80"
  };
  const [Data, setData] = useState({});
  const [city, setCity] = useState("London");
  const unit = "metric";
  const apikey = "3eddd99a888f04e858cf0c652eb14ee7";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apikey +
    "&units=" +
    unit;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [url]);

  let temperature = "";
  let wth = "";
  let des = "";
  let prs = "";
  let hum = "";
  if ("main" in Data) {
    temperature = Data.main.temp;
    wth = Data.weather[0].main;
    des = Data.weather[0].description;
    prs = Data.main.pressure;
    hum = Data.main.humidity;
    const bodyElement = document.querySelector("body");
    const tempValue = "_" + Data.weather[0].icon;

    let imgURL = image[tempValue];
    const sec = "background-image: url('" + imgURL + "')";
    bodyElement.setAttribute("style", sec);
  } else {
    temperature = "0.0";
    wth = "Unavailable";
    des = "Unavailable";
    prs = "Unavailable";
    hum = "Unavailable";
  }
  return (
    <div className="row">
      <Left sendCity={city} sendTemp={temperature} />
      <Right
        onAdd={setCity}
        sendWeather={wth}
        sendDescrp={des}
        sendPres={prs}
        sendHumid={hum}
      />
    </div>
  );
}

export default App;
