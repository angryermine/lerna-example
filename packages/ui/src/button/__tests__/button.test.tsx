import {shallow} from 'enzyme';
import React from 'react';

import {Button} from '..';

describe('Button', () => {
  it('should render correctly', () => {
    const component = shallow(<Button />);

    expect(component).toBeDefined();
  });
});
