// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, HashRouter, Switch, Route} from "react-router-dom";
import Parent from './Component/Parent';

function App() {
  return (
    <Router>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Parent}/>
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;
