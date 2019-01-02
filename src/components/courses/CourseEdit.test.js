import React from 'react';
import { shallow } from 'enzyme';

import CourseEdit from './CourseEdit';

describe('<CourseEdit />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseEdit />);
  });
});