import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../../components/pages/Header';


describe(' Header Form component rendering', () => {
  const props = {
    id: 'headerId',
    headerName: 'Nwanna',
    pathOne: '/',
    pathThree: '/login',
    navThree: 'Home',
    pathTwo: '/signup',
    navOne: 'Logout',
    navTwo: 'Report Issue',
    className: 'Header Primary',
  };
  const wrapper = shallow(<Header {...props} />);

  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
