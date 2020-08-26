import React from "react";
import {shallow} from 'enzyme';
import SuppliersList from "./SuppliersList";
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import Supplier from "../../../components/list/Supplier";
import Search from "../../../components/search/Search";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const setUp =(initialstore={})=>{
    const store = mockStore(initialstore);
    console.debug(store)
    const match = {"path":"/suppliers/:category","url":"/suppliers/food","isExact":true,"params":{"category":"food"}}
    const wrapper = shallow(<SuppliersList history={[]} store={store} match={match} />).childAt(0).dive()
    console.debug(wrapper.debug());
    console.debug(wrapper.childAt(0).debug());
    return wrapper
};

describe('<Orderlist/>', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            auth: {
                token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMThjMGU1ZWIwZjYwMmMxMWM2NDE3OSIsImlhdCI6MTU5ODM1NTYxNSwiZXhwIjoxNjI5OTEyNTQxfQ.b4zAhwzD2yj1qHkP_Y-8RBKl7Us5ukWTnjLEdua37GM',
                userId: '5f18c0e5eb0f602c11c64179',
                loading: false,
                error: null
            },
            suppliersList: {
                list: [
                    {
                        address: {
                            street: 'Stuttgarter Straße',
                            streetTwo: '',
                            city: 'Waiblingen',
                            state: 'BW',
                            code: '71332'
                        },
                        userType: 'Supplier',
                        _id: '5f18c364eb0f602c11c64182',
                        company: 'CandyMania'
                    },
                    {
                        address: {
                            street: 'Stuttgarter Straße',
                            streetTwo: '',
                            city: 'Waiblingen',
                            state: 'BW',
                            code: '71334'
                        },
                        userType: 'Supplier',
                        _id: '5f18c42eeb0f602c11c64188',
                        company: 'Fleischliebe'
                    },
                    {
                        address: {
                            street: '',
                            streetTwo: '',
                            city: '',
                            state: '',
                            code: ''
                        },
                        userType: 'Supplier',
                        _id: '5f18d77bad145e4d9902ad24',
                        company: 'Freiland'
                    },
                    {
                        address: {
                            street: '',
                            streetTwo: '',
                            city: '',
                            state: '',
                            code: ''
                        },
                        userType: 'Supplier',
                        _id: '5f19d6ecac0c48002b8f64b9',
                        company: 'Fadel’s'
                    }
                ],
                listLength: 4,
                error: null,
                loading: false
            }

        }
        wrapper = setUp(initialState)

    })

    it('should render 4 food suppliers ', function () {
        const supplierAmount = wrapper.find(Supplier)
        expect(supplierAmount).toHaveLength(4)
    });

    it('should give 1 result in search', function () {

        const spy = jest.spyOn(wrapper.instance(), 'handleSearch')

        const search = wrapper.find(Search)
        search.invoke('onChange')('M')
        console.log(wrapper.state())




        expect(spy).toBeCalledTimes(1)
        expect(wrapper.state('filteredList')).toHaveLength(1)
        spy.mockRestore()

    });


})