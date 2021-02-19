import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption';
import {Col, Row} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import styles from './OrderForm.scss';

const OrderForm = ({tripCost, options, setOrderOption}) => {
  return (
    <Row>
      <div className = {styles.options}>
        {pricing.map(option =>         
          <Col key={option.id} md={4}>
            <OrderOption key={option.id}{...option} 
              currentValue={options[option.id]} 
              setOrderOption={setOrderOption} />
          </Col>
        )}
      </div>
      <Col xs={12}>
        <OrderSummary cost={tripCost} options={options}/>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};


export default OrderForm;