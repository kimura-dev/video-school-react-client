import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
    shallow(<Dashboard />);
  });

  // it('Renders an aural status update', () => {
  //   let TEST_STATUS = 'You are listening to a game!';
    
  //   let wrapper = shallow(<Dashboard auralStatus={TEST_STATUS} />);
  //   expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  // });
});