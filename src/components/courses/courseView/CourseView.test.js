import React from 'react';
import { shallow } from 'enzyme';

import CourseView from './CourseView';

describe('<CourseView />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseView />);
  });
});