import React, { ReactElement } from 'react';
import { hot } from 'react-hot-loader/root';
import 'typeface-roboto';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Home from './screens/Home';
import NotFound from './screens/NotFound';
import TestScreen from './screens/TestScreen';
import Login from './screens/Login';
import Home from './screens/Home';
import Details from './screens/Details';

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <CssBaseline>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/signin" component={Login} />
          <Route path="/test" component={TestScreen} />

          <Route component={NotFound} />
        </Switch>
      </CssBaseline>
    </React.Fragment>
  );
};

export default hot(App);
