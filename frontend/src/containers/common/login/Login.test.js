import React from "react";
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import  Login  from "./Login";
import * as actions from "../../../redux/actions/authorization/login"
import Input from "../../../components/auth/Input";
import {login} from "../../../redux/actions/authorization/login";



const setUp =(initialstore={})=>{
    const store = mockStore(initialstore);
    console.debug(store)
    const login = jest.fn();
    const wrapper = shallow(<Login history={[]} store={store} />).childAt(0).dive();
    console.debug(wrapper.debug());
    console.debug(wrapper.childAt(0).debug());
    return wrapper
};

describe('<Login/>', function () {

    let wrapper, store;
    beforeEach(() => {
        const initialState = {
            auth: [{
                token: null,
                loading: false,
                error: null
            }]
        }
        wrapper = setUp(initialState);

    });


    it('should render two input fields', function () {
        //console.debug(wrapper.find(Input).debug())
        expect(wrapper.find(Input)).toHaveLength(2);

    });
    it('should render a login form', function () {
        //console.debug(wrapper.find(Input).debug())
        expect(wrapper.find('form')).toHaveLength(1);

    });

    it('should fire onChange for Input with right values and number of times', function () {
        const input = wrapper.find(Input).at(0);
        const spy = jest.spyOn(wrapper.instance(), 'onChange');
        input.prop('change')({target: {
            value: "E-mail", type: "mail"

            }});

        expect(spy).toBeCalledWith({target: {
                value: "E-mail", type: "mail"

            }});
        expect(spy).toBeCalledTimes(1);

        input.prop('change')({target: {
                value: "Password", type: "pass"

            }});

        expect(spy).toBeCalledWith({target: {
                value: "Password", type: "pass"

            }});
        expect(spy).toBeCalledTimes(2);

        wrapper.instance().onChange({target: {
                value: "Passwords", type: "pass"

            }});

        expect(spy).toBeCalledWith({target: {
                value: "Passwords", type: "pass"

            }});

        spy.mockRestore();
    });
    it('should fire onSubmit with correct values and number of times', function () {
        const event = {
            preventDefault() {},

        };
        wrapper.setState({
            form: {
                email: {
                    value: "Test@Mail.com"
                },
                password: {
                    value: "Test12345"
                }
            }
        });

        const spy = jest.spyOn(wrapper.instance(), 'onSubmit');
        wrapper.instance().onSubmit(event)
        expect(spy).toBeCalledTimes(1);
        spy.mockRestore();

    });
    it('should fire login dispatch', function () {
        store = mockStore({});
        store.dispatch(login());
        expect(store.getActions().length).toBe(1);

    });

});
