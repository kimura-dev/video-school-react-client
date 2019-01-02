import React from 'react';
import { shallow } from 'enzyme';

import Landing from './Landing';

describe('<Landing />', () => {
  it('Renders without crashing', () => {
    shallow(<Landing />);
  });

  // it('Renders a login btn', () => {
  //   let TEST_STATUS = 'You are listening to a game!'; 
    
  //   let wrapper = shallow(<Landing loginBtn={TEST_STATUS} />);
  //   expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  // });
});