import React from 'react';
import { shallow } from 'enzyme';

import CourseListItem from './CourseListItem';

describe('<CourseListItem />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseListItem />);
  });
});