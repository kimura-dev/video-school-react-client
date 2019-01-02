import React from 'react';
import { shallow } from 'enzyme';

import DashCoursePerviewList from './DashCoursePreviewList';

describe('<DashCoursePerviewList />', () => {
  it('Renders without crashing', () => {
    shallow(<DashCoursePerviewList />);
  });
});