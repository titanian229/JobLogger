import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { GlobalStore } from './components/GlobalStore';

import './App.css';
import Registration from './pages/Registration';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Message from './components/Message';
import Logout from './pages/Logout';
import UserSettings from './pages/UserSettings';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Overview from './pages/Overview';
import MyJourney from './pages/MyJourney';
import Testing from './pages/Testing';

const NavbarWithRouter = withRouter(Navbar);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5F9EA0',
        },
        secondary: {
            main: '#605fa0',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

const useStyles = makeStyles((theme) => ({
    paddingTop: {
        marginTop: '4rem',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStore>
                <Message />
                <Router>
                    <NavbarWithRouter />
                    <div className={classes.paddingTop}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Registration} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/testing" component={Testing} />
                        {/* <Route exact path="/overview" component={Overview} /> */}
                        {/* <PrivateRoute exact path="/home">
                            <Content />
                        </PrivateRoute> */}
                        <PrivateRoute path="/overview">
                            <Overview />
                        </PrivateRoute>
                        <PrivateRoute path="/settings">
                            <UserSettings />
                        </PrivateRoute>
                        <PrivateRoute exact path="/myjourney">
                            <MyJourney />
                        </PrivateRoute>
                        {/* <Route exact path="/myjourney" component={MyJourney} /> */}
                        {/* <Route exact path="/newpost" component={PostAdd} /> */}
                    </div>
                </Router>
            </GlobalStore>
        </ThemeProvider>
    );
}

export default App;
