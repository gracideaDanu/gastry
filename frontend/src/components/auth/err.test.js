import React from "react";
import renderer from 'react-test-renderer';

import { shallow} from 'enzyme';
import Error from './error'



describe ('<Error>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Error value='Test Error'/>);

    });

    test('Error renders correctly', () => {
        const tree = renderer
            .create(<Error/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render one p element', function () {
        expect(wrapper.find('p')).toHaveLength(1)
    });

    it('p Element should get right prop', function () {
        expect(wrapper.find('p').text()).toBe('Test Error')

    });


});

