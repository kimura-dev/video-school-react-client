import React from 'react';
import { shallow } from 'enzyme';

import LessonView from './LessonView';

describe('<LessonView />', () => {
  it('Renders without crashing', () => {
    shallow(<LessonView />);
  });
});