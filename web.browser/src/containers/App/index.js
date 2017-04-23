import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Categories from '../../containers/Categories';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <Categories />
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
