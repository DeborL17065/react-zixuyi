import React from "react";
var mqtt = require('mqtt');
//my_topic_name = 'your-adafruit-Lop17065/f/feed/Prueba2';
var client = mqtt.connect('mqtt://io.adafruit.com',{
  port:8883,
  username: "Lop17065",
  password: "aio_vtPD08JncbXPNF3A5bH80Z49h8Bs"
});



//var adafruitIo = require("adafruit-io");

import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
