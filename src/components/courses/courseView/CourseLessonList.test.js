import React from 'react';
import { shallow } from 'enzyme';

import CourseLessonList from './CourseLessonList';

describe('<CourseLessonList />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseLessonList />);
  });
});