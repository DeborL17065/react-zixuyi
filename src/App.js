import React from "react";
var mqtt = require('mqtt');
//my_topic_name = 'your-adafruit-Lop17065/f/feed/Prueba2';
var client = mqtt.connect('mqtts://io.adafruit.com',{
  port:8883,
  username: "Lop17065",
  password: "aio_vtPD08JncbXPNF3A5bH80Z49h8Bs"
});

client.on('connect',() =>{
  client.subscribe(my_topic_name)
});

client.on('error',(error) => {
  console.log('MQTT Client Errored');
  console.log(error);
});

client.on('message',function (topic, message){
  //DO SOME SORT OF THING HERE.
  console.log(message.toString());
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
