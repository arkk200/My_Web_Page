import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import WrapContainer from "./WrapContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <WrapContainer />
        </Route>
        <Route path="/three">
          <div>test</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
