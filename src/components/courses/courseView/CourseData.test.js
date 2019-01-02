import React from 'react';
import { shallow } from 'enzyme';

import CourseData from './CourseData';

describe('<CourseData />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseData />);
  });
});