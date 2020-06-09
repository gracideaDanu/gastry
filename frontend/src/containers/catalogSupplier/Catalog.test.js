import React from "react";
import {shallow} from 'enzyme';
import Catalog from "./Catalog";
import {findByTestAtrr, testStore} from "../../../Utils";
import SupplierCatListView from "../../components/list/SupplierCatListView";


const setUp =(initialstore={})=>{
    const store = testStore(initialstore);
    const wrapper = shallow(<Catalog store={store}/>).childAt(0).dive();
    return wrapper
}

describe('<Catalog/>', function () {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            //...
        }
        wrapper = setUp(initialState);
        console.log(wrapper.debug());

    });


    it('should render 1 ListView', function () {
        const component = wrapper.find(SupplierCatListView);
        expect(component.length).toBe(1);
    });
});