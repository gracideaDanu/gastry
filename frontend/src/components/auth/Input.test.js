import React from "react";
import renderer from 'react-test-renderer';

import {mount, shallow} from 'enzyme';
import Input from "./Input";



describe ('<Input>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Input/>);

    });

    test('Input renders correctly', () => {
        const tree = renderer
            .create(<Input/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });


    it('should render div', function () {
        console.log(wrapper.debug());
        expect(wrapper.find('div.form-group')).toHaveLength(1);


    });

    it('should have two children', function () {
        expect(wrapper.children()).toHaveLength(2);
    });

    it('should render label and placeholder', function () {
        wrapper.setProps({
            name: "Test Label",

        });
        expect(wrapper.childAt(0).text()).toBe("Test Label");
        expect(wrapper.childAt(1).prop('placeholder')).toBe('Please enter Test Label')
    });

    it('should fire onChange of input field', function () {
        const changeMockHandler = jest.fn();
        wrapper.setProps({
            change: changeMockHandler,
            content: 'Test Content'
        });

        console.log(wrapper.find('input').debug())
        wrapper.find('input').simulate('change', {target: {value: 'Your new Value'}});
        expect(changeMockHandler).toBeCalledWith(
            expect.objectContaining({
                target: expect.objectContaining({
                    value: 'Your new Value'
                })
            })
        );

    });



});

