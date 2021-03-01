import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );
}

export default App;
