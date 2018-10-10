import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../../../../components/pages/LandingPage';


describe(' Landing Page component rendering', () => {
  const wrapper = shallow(<Landing />);

  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
