import React from 'react';
import { shallow } from 'enzyme';

import LessonVideoPlayer from './LessonVideoPlayer';

describe('<LessonVideoPlayer />', () => {
  it('Renders without crashing', () => {
    shallow(<LessonVideoPlayer />);
  });
});