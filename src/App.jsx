import { useState,useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Newslatter from './Newslatter';
import Land_page from './Land_page';
import Music from './Music';
import Sports from './Sports';
import Tech from './Tech';
import Contact from './Contact';
import Navbar from './Navbar';
import Cart from './Cart';
import { Router, Switch, Route, NavLink} from 'react-router-dom'
function App() {
  const [countS, setCountS] = useState(0);
  
  const [countT, setCountT] = useState(0);
  
  const [countM, setCountM] = useState(0);
  
  
  return (
    <> 
      
      <Navbar   countM={countM} countT={countT} countS={countS}  setCountM={setCountM} setCountT={setCountT} setCountS={setCountS} />
     

      <Switch>
      <Route exact path="/" component={Land_page}/>
        <Route exact path="/Land_page" component={Land_page}/>
          <Route exact path="/Newslatter" component={Newslatter}/>
          <Route exact path="/Music inventory" component={Music}/>
          <Route exact path="/Sports" component={Sports}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/Tech" component={Tech}/>
          <Route exact path="/Cart" component={Cart}/>
 </Switch> 
    </>
  )
}

export default App
