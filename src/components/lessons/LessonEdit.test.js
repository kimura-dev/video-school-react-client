import React from 'react';
import { shallow } from 'enzyme';

import LessonEdit from './LessonEdit';

describe('<LessonEdit />', () => {
  it('Renders without crashing', () => {
    shallow(<LessonEdit />);
  });
});