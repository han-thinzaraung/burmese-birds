import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import Home from './Home';
import Birds from './Birds';
import BirdDetails from './BirdDetails';


function App() {
  return (
    <Router>
      <div className="bg-dark">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/birds">
              <Birds/>
            </Route>
            <Route exact path="/birddetails/:id">
              <BirdDetails/>
            </Route>
          </Switch>
        </div>
      </div>

    </Router>
  );
}

export default App;
