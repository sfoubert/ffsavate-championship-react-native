import React from 'react';
import renderer from 'react-test-renderer';

import Fights from './Fights';

describe('Fights', () => {
    it('should be rendered', () => {
        const rendered = renderer.create(<Fights />);
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
