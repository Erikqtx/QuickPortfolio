import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Work from "./pages/work";
import Questions from "./pages/questions";
import About from "./pages/about";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/questions" exact component={Questions} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
