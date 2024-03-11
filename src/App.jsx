import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Intro from './Intro';
import Gryffindor from './Gryffindor';
import Hufflepuff from './Hufflepuff';
import Ravenclaw from './Ravenclaw';
import Slytherin from './Slytherin';
import Course from './Course';
import Apply from './Apply';
import Faculty from './Faculty';


function App() {
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Intro" component={Intro} />
          <Route path="/Gryffindor" component={Gryffindor} />
          <Route path="/Hufflepuff" component={Hufflepuff} />
          <Route path="/Ravenclaw" component={Ravenclaw} />
          <Route path="/Slytherin" component={Slytherin} />
          <Route path="/Course" component={Course} />
          <Route path="/Apply" component={Apply} />
          <Route path="/Faculty" component={Faculty} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
