import React from 'react';
import { shallow } from 'enzyme';

import LessonViewNavbar from './LessonViewNavbar';

describe('<LessonViewNavbar />', () => {
  it('Renders without crashing', () => {
    shallow(<LessonViewNavbar />);
  });
});