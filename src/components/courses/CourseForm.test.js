import React from 'react';
import { shallow } from 'enzyme';

import CourseForm from './CourseForm';

describe('<CourseForm />', () => {
  it('Renders without crashing', () => {
    shallow(<CourseForm />);
  });

  
  it('Should fire the createCourse callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm createCourse={callback} />);
    const title = 'Test title';
    wrapper.find('input[type="text"]').instance().title = title;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(title.toString());
  });

  it('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="text"]');
    input.instance().title = 'Test title';
    wrapper.simulate('submit');
    expect(input.instance().title).toEqual('');
  });

});

