import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css'

class NotFound extends Component {
  render() {
    return (
      <div className={styles.found}>
        {this.props.children}
      </div>
    );
  }
}

NotFound.propTypes = {
  children: PropTypes.object,
};

export default NotFound;