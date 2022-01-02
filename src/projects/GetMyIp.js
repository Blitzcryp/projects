import axios from "axios"
import { useState, useEffect } from "react";

export default function GetMyIp(){
    const [ip, setIp] = useState('');
    
    const getData = async() => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIp(res.data.IPv4);
    }

    useEffect( 
        () => {
            getData()
        }, []
    );

    return(<>
        <h1>Your ip is: { ip }</h1>
    </>);
}