import React from "react";

import {shallow} from 'enzyme';
import Login from "./Login";
import {findByTestAtrr, testStore} from "../../../Utils";
import Input from "../../components/auth/Input";


const setUp =(initialstore={})=>{
    const store = testStore(initialstore);
    const wrapper = shallow(<Login store={store}/>).childAt(0).dive();
    return wrapper
}

describe('<Login/>', function () {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            auth: [{
                token: null,
                loading: false,
                error: null
            }]
        }
        wrapper = setUp(initialState);
        console.log(wrapper.debug());

    });


    it('should render two input fields', function () {
        const component = wrapper.find(Input);
        expect(component.length).toBe(2);
    });
});