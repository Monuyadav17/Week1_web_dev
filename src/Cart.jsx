import './App.css';
const Cart = (props) =>{
    return(
        <>
        <h1>Items which you took from various inventoris</h1>
        
        <h2>No of item taken from Music inventiry :- item Name=Music_item1   ----{props.location.countM}</h2>
        <br/>
        <h2>No of item taken from Tech inventiry :- item Name=Tech_item1   ----{props.location.countT}</h2>
        <br/>
        <h2>No of item taken from Sports inventiry :- item Name=Sport_item1    -----{props.location.countS}</h2>
        <br/>

        <div className="submit">
             <h1>Total item issued=={props.location.countS+props.location.countM+props.location.countT}</h1>
        </div>
         <form>
         <div className="submit"><input type="submit" value="Isuue above items" /> </div>
         </form>
        
        </>
    );
};

export default Cart