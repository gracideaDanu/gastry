import React from "react";
import {mount, shallow} from "enzyme";
import CustomerLayout from "../customer/CustomerLayout";
import {testStore} from "../../../Utils";
import {MemoryRouter} from "react-router-dom";
import NavItem from "react-bootstrap/NavItem";
import Button from "react-bootstrap/Button";
import SupplierLayout from "../supplier/supplierLayout/SupplierLayout";

describe('<CustomerLayout/>', function () {
    let component;

    beforeEach(() => {
        const initialState = {
            auth: [{
                token: null,
                loading: false,
                error: null
            }]
        }
        const store = testStore(initialState);
        component = mount(<MemoryRouter><CustomerLayout store={store}/></MemoryRouter>);
        console.log(component.debug());

    });
    it('should render 3 buttons', function () {
        console.log(component)
        expect(component.find(NavItem).length).toBe(3)
        expect(component.find(Button).length).toBe(1)
    });
});


describe('<SupplierLayout/>', function () {
    let component;

    beforeEach(() => {
        const initialState = {
            auth: [{
                token: null,
                loading: false,
                error: null
            }]
        }
        const store = testStore(initialState);
        component = mount(<MemoryRouter><SupplierLayout store={store}/></MemoryRouter>);
        console.log(component.debug());

    });
    it('should render 2 buttons', function () {
        console.log(component)
        expect(component.find(NavItem).length).toBe(2)
        expect(component.find(Button).length).toBe(1)
    });
});