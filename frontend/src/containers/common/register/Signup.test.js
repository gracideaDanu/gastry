import React from "react";
import {shallow} from 'enzyme';
import Signup from "./Signup";
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const setUp =(initialstore={})=>{
    const store = mockStore(initialstore);
    console.debug(store)
    const match = {
        "path":"/register/:userType",
        "url":"/register/customer",
        "isExact":true,
        "params":{"userType":"supplier"}}
        const mockReplace = jest.fn()
        const history = {
        replace: mockReplace
        }
    const wrapper = shallow(<Signup history={history} store={store} match={match} />).childAt(0).dive()
    console.debug(wrapper.debug());
    console.debug(wrapper.childAt(0).debug());
    return wrapper
};

describe('<Signup/>',() => {

        let wrapper;
        beforeEach(() => {
            const initialState = {
                auth: [{
                    token: null,
                    loading: false,
                    error: null
                }],
                reg: {
                    loading: false,
                    error: null
                }
            }
            wrapper = setUp(initialState)
        })


    it('should fire getOffer with right values when offer is changed in select ', function () {
        let select = wrapper.find('select');
        const spy = jest.spyOn(wrapper.instance(),'getOffer')
        console.log(select.debug())
        const event = {
            target: {
                value: 'Food'
            },
            preventDefault() {}
        }
        select.prop('onChange')(event)
        expect(spy).toBeCalledWith(event)
        expect(wrapper.state('tag')).toBe('food')
    });
})