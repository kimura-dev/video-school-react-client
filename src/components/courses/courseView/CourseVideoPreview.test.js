import React from 'react';
import { shallow } from 'enzyme';

import CourseVideoPreview from './CourseVideoPreview';

describe('<CourseVideoPreview />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseVideoPreview />);
  });
});