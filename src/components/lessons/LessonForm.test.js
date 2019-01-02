import React from 'react';
import { shallow } from 'enzyme';

import LessonForm from './LessonForm';

describe('<LessonForm />', () => {
  it('Renders without crashing', () => {
    shallow(<LessonForm />);
  });
});