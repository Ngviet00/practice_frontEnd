import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'

function App() {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/SignIn">
                    <SignIn />
                </Route>
                <Route path="/SignUp">
                    <SignUp />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
