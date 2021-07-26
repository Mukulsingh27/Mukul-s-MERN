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
import Logout from "./components/Logout";
import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer/UseReducer";

//contextAPI
export const UserContext = createContext();
const Routing = () => {
    return (
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
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/logout" component={Logout} />
            {/* <Route component={Error} /> */}
            <Redirect to="/" />
        </Switch>
    );
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="main">
            <UserContext.Provider value={{ state, dispatch }}>
                <Navbar />
                <Routing />
                <Footer />
            </UserContext.Provider>
        </div>
    );
}

export default App;
