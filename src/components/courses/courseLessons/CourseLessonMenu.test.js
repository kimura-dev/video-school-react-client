import React from 'react';
import { shallow } from 'enzyme';

import CourseLessonMenu from './CourseLessonMenu';

describe('<CourseLessonMenu />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseLessonMenu />);
  });
});
