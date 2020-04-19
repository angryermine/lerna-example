import {shallow} from 'enzyme';
import React from 'react';

import {ButtonGroup} from '..';

describe('ButtonGrooup', () => {
  it('should render correctly', () => {
    const component = shallow(<ButtonGroup />);

    expect(component).toBeDefined();
  });
});
