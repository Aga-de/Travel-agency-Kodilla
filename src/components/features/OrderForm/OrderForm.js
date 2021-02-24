import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption';
import {Col, Row} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import styles from './OrderForm.scss';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, tripId, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripName,
    tripId,
    tripCountryCode: tripCountry.alpha3Code,
    ...options,
    totalCost,

  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  if(!options.name == '' && !options.contact == '') {

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('Enter name and contact');
  }
};

const OrderForm = ({tripCost, options, setOrderOption, tripName, tripId, tripCountry}) => {
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
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, tripCountry)}>Order now!</Button>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  tripCountry: PropTypes.object,
  tripCountryCode: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};


export default OrderForm;