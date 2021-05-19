import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Work from "./pages/work";
import Questions from "./pages/questions";
import About from "./pages/about";
import Datenschutz from "./pages/datenschutz";
import Impressum from "./pages/impressum";
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
          <Route path="/datenschutz" exact component={Datenschutz} />
          <Route path="/impressum" exact component={Impressum} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
