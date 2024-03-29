import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import Home from './Home';
import Birds from './Birds';
import BirdDetails from './BirdDetails';
import Footer from './Footer';



function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <Router>
      <div className="bg-dark">
        <Navbar />

        <div className='content'>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/birds">
              <Birds />
            </Route>
            <Route exact path="/birddetails/:id">
              <BirdDetails />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
