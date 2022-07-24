import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Newslatter from './Newslatter';
import Land_page from './Land_page';
import Music from './Music';
import Sports from './Sports';
import Tech from './Tech';
import Contact from './Contact';
import Navbar from './Navbar';
import { Router, Switch, Route, NavLink} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <Navbar/>
       


      <Switch>
        <Route exact path="/" component={Land_page}/>
          <Route exact path="/Newslatter" component={Newslatter}/>
          <Route exact path="/Music inventory" component={Music}/>
          <Route exact path="/Sports" component={Sports}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/Tech" component={Tech}/>
 </Switch> 
    </>
  )
}

export default App
