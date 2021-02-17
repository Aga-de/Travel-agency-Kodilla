import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {

  state = {
    startDate: new Date(),
  };

  render () {
    const {currentValue, setOptionValue} = this.props;
    return (
      <DatePicker
        value={currentValue}
        selected={currentValue}
        minDate = {new Date()}
        onChange={date => setOptionValue(date)}
        dateFormat="dd/MM/yyyy"
      />
    );
  }
}

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};
 

export default OrderOptionDate;