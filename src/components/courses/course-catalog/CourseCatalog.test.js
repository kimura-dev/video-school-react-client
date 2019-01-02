import React from 'react';
import { shallow } from 'enzyme';

import CourseCatalog from './CourseCatalog';

describe('<CourseCatalog />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseCatalog />);
  });
});