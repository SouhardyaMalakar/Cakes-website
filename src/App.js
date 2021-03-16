import React from 'react'
import './App.css';
import Home from './components/pages/Home';
import Photos from './components/pages/Photos';
import Classes from './components/pages/Classes';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Custom from './components/pages/Custom';
import Form from './components/pages/Form';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
  <>
  <Router>
    
     <Navbar />
     
     <Switch>
       <Route path='/' exact component={Home}/>
       </Switch>
       <Switch>
       <Route path='/photos' exact component={Photos}/>
       </Switch>
       <Switch>
       <Route path='/classes' exact component={Classes}/>
       </Switch>
       <Switch>
       <Route path='/services' exact component={Services}/>
       </Switch>
       <Switch>
       <Route path='/custom' exact component={Custom}/>
       </Switch>
         <Switch>
       <Route path='/products' exact component={Products}/>
       </Switch>
       <Switch>
       <Route path='/form' exact component={Form}/>
       </Switch>
    
     </Router>
     
     
     </>
     
  );
}

export default App;
