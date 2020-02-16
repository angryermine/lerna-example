import {shallow} from 'enzyme';
import React from 'react';

import {Input} from '..';

describe('Input', () => {
  it('should render correctly', () => {
    const component = shallow(<Input />);

    expect(component).toBeDefined();
  });
});
