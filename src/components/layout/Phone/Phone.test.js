import React from 'react';
import {shallow} from 'enzyme';
import Phone from './Phone';

const select = {
  number: '.number',      
};
  
const mockProps = {
  number: 'Aga, 345',
};

describe('Component Phone', () => {
  it('should render without crashing', () => {
    const component = shallow(<Phone/>);   
    expect(component).toBeTruthy();
  });
  it('should render number', () => {
    const component = shallow(<Phone/>);
    expect(component.exists(select.number)).toEqual(true);
  });
  it('should render correct number', () => {
    const component = shallow(<Phone {...mockProps}/>);
    expect(component.find(select.number).text()).toEqual(mockProps.number);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};
const checkPhoneAtTime = (time, expectedPhone) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
    const component = shallow(<Phone {...mockProps} />);
    const renderedTime = component.find(select.number).text();
    expect(renderedTime).toEqual(expectedPhone);
  
    global.Date = trueDate;
  });
};

describe('Component Phone with mocked Date', () => {
  checkPhoneAtTime('8:00:00', mockProps.number);
  checkPhoneAtTime('15:30:00', mockProps.number);
  checkPhoneAtTime('23:15:00', mockProps.number);
});
 