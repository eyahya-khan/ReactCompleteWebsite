import React from 'react';
import './App.css';
import Home from './component/pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/pages/Footer/Footer';
import Services from './component/pages/Services/Services';
import Products from './component/pages/Products/Products';
import Contact from './component/pages/Contact/Contact';
import Signup from './component/pages/Signup/Signup';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact' component={Contact} />
        <Route path='/signup' component={Signup} />
        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
