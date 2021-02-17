import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';



const OrderOptionText = ({currentValue, name, setOptionValue, placeholder}) => (
  <div className={styles.Text}>
    <input
      type="text" 
      placeholder={placeholder}
      className={styles.inputSmall} 
      value={currentValue} 
      name={name}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OrderOptionText;