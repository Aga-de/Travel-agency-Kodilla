import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link depending on id', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id={expectedId} tags={['a', 'b', 'c']}/>);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });
  it('should have correct src and alt of img', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'name';
    const component = shallow(<TripSummary image={expectedImage} name={expectedName} tags={['a', 'b', 'c']}/>);
  
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);  
  });
  it('should render props name, cost, days without crashing', () => {
    const component = shallow(<TripSummary name='AAA' cost='BBB' days={3} tags={['a', 'b', 'c']}/>);
    expect(component).toBeTruthy();
  });
  it('should throw error without props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render tags in correct order', () => {
    const component = shallow(<TripSummary tags={['a', 'b', 'c']}/>);

    expect(component.find('.tags span').at(0).text()).toEqual('a');
    expect(component.find('.tags span').at(1).text()).toEqual('b');
    expect(component.find('.tags span').at(2).text()).toEqual('c');
  });
  it('should throw error without tags', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags}/>);
    expect(component.hasClass('tags')).toBe(false);    
  });
});



