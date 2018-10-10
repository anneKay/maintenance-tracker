import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../../components/pages/Footer';


describe(' Footer Form component rendering', () => {
  const wrapper = shallow(<Footer />);

  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
