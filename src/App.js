import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Hero from './components/Hero/Hero';
import Brand from './components/Brand/Brand';
import Feature from './components/Feature/Feature';
import Function from './components/Function/Function';
import Team from './components/Team/Team';
import Price from './components/Price/Price';
import Footer from './components/Footer/Footer';
import Blog from './components/BLog/Blog';
import Feedback from './components/Feedback/Feedback';

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Hero />
                        <Brand />
                        <Feature />
                        <Function />
                        <Blog />
                        <Team />
                        {/* <Feedback /> */}
                        <Price />
                        <Footer />
                    </Route>
                    <Route path="/SignIn">
                        <SignIn />
                    </Route>
                    <Route path="/SignUp">
                        <SignUp />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
