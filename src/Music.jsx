import './App.css';
import 'react'
import { useEffect, useState } from 'react';
const Music = (props) =>{

    const [load, setLoad] = useState(false);
    const [val, setVal] = useState(0);

    useEffect(()=>{
        if(load===false)
        {
            setVal(props.location.countM);
            setLoad(true)
        }
    },[load]);

    return(
    <div>
        <h1>Welcome to Music </h1>
        <button onClick={() => {props.location.setCountM(countM => countM + 1); setVal(prev => prev + 1)}}>Music_item1 </button>       
        <br></br>
        <button onClick={() => {props.location.setCountM(countM => countM - 1); setVal(prev => prev - 1)}}>Music_item1-delete </button>       
       
        <h2>{val}</h2>
    </div>
    );
};

export default Music
