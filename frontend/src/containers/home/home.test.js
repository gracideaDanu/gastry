import React from "react";

import {shallow} from 'enzyme';
import {findByTestAtrr, testStore} from "../../../Utils";
import Input from "../../components/auth/Input";
import Home from "./Home";


const setUp =(initialstore={})=>{
    const store = testStore(initialstore);
    const wrapper = shallow(<Home store={store}/>);
    return wrapper
}

describe('<Home/>', function () {

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