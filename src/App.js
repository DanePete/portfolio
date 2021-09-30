import logo from './logo.svg';
import './App.scss';
import Hero from './components/Hero/hero';
import SectionTwo from './components/SectionTwo/sectionTwo';
import MenuNav from './components/MenuNav/MenuNav'
import LandingHero from './components/LandingHero/LandingHero';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
        <div className="container-fluid">
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/home"
            >
              <MenuNav />
              <LandingHero />
              <Hero />
              {/* <SectionTwo /> */}
            </Route>
            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
