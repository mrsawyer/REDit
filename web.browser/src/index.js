import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import App from './containers/App';
import CreatePost from './containers/CreatePost';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import PostList from './containers/PostList';
import Welcome from './containers/Welcome';

import MainLayout from './layouts/MainLayout';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';
import './styles/index.css';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <MainLayout>
        <App>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/create-post" component={CreatePost} />
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/posts/new" component={CreatePost} />
          </Switch>
        </App>
      </MainLayout>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
