import './App.css';
import Landing from './component/landing-page/Landing';
import {
  // React-Router-Dom-Package
  Link, Router, Route, Switch, Redirect,
  // Custom Components
  NavBar,
  // MUI Styling Package
  useStyles,
  // MUI Core Packages
  ThemeProvider,

} from './imports/imports';

function App() {
  return (
    <div className="main">
      <Router>
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <NavBar />
          <body >
            <Landing />
          </body>
        </Route>
      </Router>
    </div>
  );
}

export default App;
