import './App.css';
import 'react'
import { useEffect, useState } from 'react';
const Tech = (props) =>{
   
    const [load, setLoad] = useState(false);
    const [val, setVal] = useState(0);

    useEffect(()=>{
        if(load===false)
        {
            setVal(props.location.countT);
            setLoad(true)
        }
    },[load]);

    return(
    <div>
        <h1>Welcome to Tech </h1>
        <button onClick={() => {props.location.setCountT(countT => countT + 1); setVal(prev => prev + 1)}}>Tech_item1 </button> 
        <br></br>      
        <button onClick={() => {props.location.setCountT(countT => countT - 1); setVal(prev => prev - 1)}}>Tech_item1-delete </button>       
       
        <h2>{val}</h2>
    </div>
    );
};

export default Tech;
