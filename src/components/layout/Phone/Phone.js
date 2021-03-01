import React from 'react';
import styles from './Phone.scss';
import PropTypes from 'prop-types';

class Phone extends React.Component {

  constructor() {
    super();
    
    setInterval(() => {
      this.forceUpdate();
    }, 1000 * 60);
  }

    static propTypes = {
      number: PropTypes.string,
    };


    render() {
      const {number} = this.props;
      return (
        <div className={styles.component}>
          <div className={styles.number}>
            {number}
          </div>
        </div>
      );
    }
}


export default Phone;
