import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Signin from "./components/Signin";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

function App() {
    return (
        <div className="main">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                {/* <Route
                    exact
                    path="/about/:fname/:lname/:num"
                    component={Dynamic}
                /> */}
                <Route exact path="/services" component={Services} />
                {/* <Route exact path="/covid" component={CoronaStatewise} /> */}
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Signin} />
                <Route exact path="/register" component={Signup} />
                {/* <Route component={Error} /> */}
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
