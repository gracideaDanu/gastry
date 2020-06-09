import React from "react";
import {mount, shallow} from 'enzyme';
import SupplierCatListView from "./SupplierCatListView";
import {findByTestAtrr, testStore} from "../../../Utils";
import Item from "./Item";

const setUp =(initialList=[])=>{
    const wrapper = mount(<SupplierCatListView itemlist={initialList}/>);
    return wrapper
}

describe('<SupplierCatListView/>', function () {

    let wrapper;

    beforeEach(() => {

    });


    it('should render no items', function () {
        wrapper = setUp([]);
        const component = wrapper.find(Item);
        expect(component.length).toBe(0);
    });

    it('should render no items', function () {
        const itemlist = [
            {
                catg: 'drink',
                name: 'Item 1',
                price: 30,
                description:"some description"
            },
            {
                catg: 'food',
                name: 'Item 2',
                price: 30,
                description:"some description"

            }
        ]
        wrapper = setUp(itemlist);
        const component = wrapper.find(Item);
        expect(component.length).toBe(2);
    });
});