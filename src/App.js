import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Detail from './pages/Detail';
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch >
          <Route exact path="/" component={Home}/>
          <Route exact path="/detail" component={Detail}/>
          <Redirect from="/redirect" to="/" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
