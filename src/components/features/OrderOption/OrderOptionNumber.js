import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';


const OrderOptionNumber = ({price, currentValue, limits, setOptionValue}) => (
  <div className={styles.number}>
    <input
      type="number" 
      className={styles.inputSmall} 
      value={currentValue} 
      min={limits.min} 
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;