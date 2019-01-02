import React from 'react';
import { shallow } from 'enzyme';

import CourseLessonListItem from './CourseLessonListItem';

describe('<CourseLessonListItem />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseLessonListItem />);
  });
});