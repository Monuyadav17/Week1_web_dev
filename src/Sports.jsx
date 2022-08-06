import './App.css';
import 'react'
import { useEffect, useState } from 'react';
const Sports = (props) =>{
   
    const [load, setLoad] = useState(false);
    const [val, setVal] = useState(0);

    useEffect(()=>{
        if(load===false)
        {
            setVal(props.location.countS);
            setLoad(true)
        }
    },[load]);

    return(
    <div>
        <h1>Welcome to Sports </h1>
        <button onClick={() => {props.location.setCountS(countS => countS + 1); setVal(prev => prev + 1)}}>Sport_item1 </button>    
        <br></br>   
        <button onClick={() => {props.location.setCountS(countS => countS - 1); setVal(prev => prev - 1)}}>Sport_item1-delete </button>       
       
        <h2>{val}</h2>
    </div>
    );
};

export default Sports;
