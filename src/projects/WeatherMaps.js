import axios from "axios"
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function WeatherMaps() {
    const APIKey = "lol as if";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=${APIKey}`
    
    const [temp, setTemp] = useState("Loading...");
    const [feels_like, setFeelsLike] = useState("Loading...");
    const [pressure, setPressure] = useState("Loading...");

    const getData = async() => {
        const res = await axios.get(url).then((result) => {
            console.log(result);
            setTemp(result.main.temp);
            setFeelsLike(result.main.temp);
            setPressure(result.main.pressure);
        });
    };

    useEffect( 
        () => {
            getData()
        }, []
    );
        
    return(
        <>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>temp</th>
      <th>feels_like</th>
      <th>pressure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <th>{ temp }</th>
        <th>{ feels_like }</th>
        <th>{ pressure }</th>
    </tr>
  </tbody>
</Table>
        </>
    );
}