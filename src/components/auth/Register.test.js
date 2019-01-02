import React from 'react';
import { shallow } from 'enzyme';

import Register from './Register';

describe('<Register />', () => {
  it('Renders without crashing', () => {
    shallow(<Register />);
  });
});