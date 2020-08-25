import React from "react";
import {shallow} from 'enzyme';
import Orderlist from './Orderlist'
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import {SwipeableList, SwipeableListItem} from "@sandstreamdev/react-swipeable-list";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const setUp =(initialstore={})=>{
    const store = mockStore(initialstore);
    console.debug(store)
    const wrapper = shallow(<Orderlist history={[]} store={store} />).childAt(0).dive()
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
            orders: {
                orders: [
                    {
                        status: 'open',
                        date: '2020-07-23T23:51:57.349Z',
                        products: [
                            {
                                __t: 'productList',
                                _id: '5f18c225eb0f602c11c6417b',
                                name: 'Käse',
                                description: 'Leckerer Käse',
                                price: 1.98,
                                tags: 'Food',
                                size: '100g',
                                createdAt: '2020-07-22T22:48:05.177Z',
                                updatedAt: '2020-07-22T22:48:05.177Z',
                                amount: 20
                            }
                        ],
                        _id: '5f1a229d939b21002bac6704',
                        chat_id: '5f1a229d939b21002bac6704',
                        customer_id: {
                            userType: 'Customer',
                            _id: '5f1a2258939b21002bac66f3',
                            company: 'Bat Dat'
                        },
                        supplier_id: {
                            userType: 'Supplier',
                            _id: '5f18c0e5eb0f602c11c64179',
                            company: 'BioLand'
                        },
                        total: 39.6,
                        createdAt: '2020-07-23T23:51:57.377Z',
                        updatedAt: '2020-07-23T23:51:57.377Z',
                        newMessages: 0
                    },
                    {
                        status: 'open',
                        date: '2020-07-23T17:42:38.830Z',
                        products: [
                            {
                                __t: 'productList',
                                _id: '5f18c2eeeb0f602c11c64181',
                                name: 'Wasser',
                                description: 'Es ist Wasser',
                                price: 0.12,
                                tags: 'Drink',
                                size: '1l',
                                createdAt: '2020-07-22T22:51:26.031Z',
                                updatedAt: '2020-07-22T22:51:26.031Z',
                                amount: 5
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c2daeb0f602c11c64180',
                                name: 'Bier',
                                description: 'Bier, Bier, Bier',
                                price: 1,
                                tags: 'Drink',
                                size: '300ml',
                                createdAt: '2020-07-22T22:51:06.221Z',
                                updatedAt: '2020-07-22T22:51:06.221Z',
                                amount: 2
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c2afeb0f602c11c6417f',
                                name: 'Orangensaft',
                                description: 'Aus Orangen',
                                price: 1.99,
                                tags: 'Drink',
                                size: '1l',
                                createdAt: '2020-07-22T22:50:23.943Z',
                                updatedAt: '2020-07-22T22:50:23.943Z',
                                amount: 1
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c296eb0f602c11c6417e',
                                name: 'Erdbeermarmelade',
                                description: 'Leckere Erdbeermarmelade',
                                price: 2.5,
                                tags: 'Food',
                                size: '300g',
                                createdAt: '2020-07-22T22:49:58.396Z',
                                updatedAt: '2020-07-22T22:49:58.396Z',
                                amount: 1
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c241eb0f602c11c6417c',
                                name: 'Nuss-Nougat Aufstrich',
                                description: 'Schmeckt fast wie Nutella',
                                price: 2.99,
                                tags: 'Food',
                                size: '500g',
                                createdAt: '2020-07-22T22:48:33.049Z',
                                updatedAt: '2020-07-22T22:48:33.049Z',
                                amount: 2
                            }
                        ],
                        _id: '5f19cc0eac0c48002b8f64a0',
                        chat_id: '5f19cc0eac0c48002b8f64a0',
                        customer_id: {
                            userType: 'Customer',
                            _id: '5f18c64beb0f602c11c64199',
                            company: 'Miso'
                        },
                        supplier_id: {
                            userType: 'Supplier',
                            _id: '5f18c0e5eb0f602c11c64179',
                            company: 'BioLand'
                        },
                        total: 13.07,
                        createdAt: '2020-07-23T17:42:38.840Z',
                        updatedAt: '2020-07-23T17:42:38.840Z',
                        newMessages: 1
                    },
                    {
                        status: 'open',
                        date: '2020-07-23T14:32:04.416Z',
                        products: [
                            {
                                __t: 'productList',
                                _id: '5f18c296eb0f602c11c6417e',
                                name: 'Erdbeermarmelade',
                                description: 'Leckere Erdbeermarmelade',
                                price: 2.5,
                                tags: 'Food',
                                size: '300g',
                                createdAt: '2020-07-22T22:49:58.396Z',
                                updatedAt: '2020-07-22T22:49:58.396Z',
                                amount: 2
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c274eb0f602c11c6417d',
                                name: 'Kartoffelchips',
                                description: 'Leckere gesalzene Kartoffelchips',
                                price: 1.89,
                                tags: 'Food',
                                size: '200g',
                                createdAt: '2020-07-22T22:49:24.313Z',
                                updatedAt: '2020-07-22T22:49:24.313Z',
                                amount: 1
                            }
                        ],
                        _id: '5f199f64a932cb12521ba293',
                        chat_id: '5f199f64a932cb12521ba293',
                        customer_id: {
                            userType: 'Customer',
                            _id: '5f199f0ca932cb12521ba292',
                            company: 'Fadel\'s'
                        },
                        supplier_id: {
                            userType: 'Supplier',
                            _id: '5f18c0e5eb0f602c11c64179',
                            company: 'BioLand'
                        },
                        total: 6.89,
                        createdAt: '2020-07-23T14:32:04.430Z',
                        updatedAt: '2020-07-23T14:32:04.430Z',
                        newMessages: 0
                    },
                    {
                        status: 'open',
                        date: '2020-07-23T08:46:34.349Z',
                        products: [
                            {
                                __t: 'productList',
                                _id: '5f18c241eb0f602c11c6417c',
                                name: 'Nuss-Nougat Aufstrich',
                                description: 'Schmeckt fast wie Nutella',
                                price: 2.99,
                                tags: 'Food',
                                size: '500g',
                                createdAt: '2020-07-22T22:48:33.049Z',
                                updatedAt: '2020-07-22T22:48:33.049Z',
                                amount: 2
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c274eb0f602c11c6417d',
                                name: 'Kartoffelchips',
                                description: 'Leckere gesalzene Kartoffelchips',
                                price: 1.89,
                                tags: 'Food',
                                size: '200g',
                                createdAt: '2020-07-22T22:49:24.313Z',
                                updatedAt: '2020-07-22T22:49:24.313Z',
                                amount: 1
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c296eb0f602c11c6417e',
                                name: 'Erdbeermarmelade',
                                description: 'Leckere Erdbeermarmelade',
                                price: 2.5,
                                tags: 'Food',
                                size: '300g',
                                createdAt: '2020-07-22T22:49:58.396Z',
                                updatedAt: '2020-07-22T22:49:58.396Z',
                                amount: 5
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c20beb0f602c11c6417a',
                                name: 'SimplyV',
                                description: 'Leckere vegane Genießerscheiben',
                                price: 2.49,
                                tags: 'Food',
                                size: '100g',
                                createdAt: '2020-07-22T22:47:39.008Z',
                                updatedAt: '2020-07-22T22:47:39.008Z',
                                amount: 3
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c2eeeb0f602c11c64181',
                                name: 'Wasser',
                                description: 'Es ist Wasser',
                                price: 0.12,
                                tags: 'Drink',
                                size: '1l',
                                createdAt: '2020-07-22T22:51:26.031Z',
                                updatedAt: '2020-07-22T22:51:26.031Z',
                                amount: 2
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c2afeb0f602c11c6417f',
                                name: 'Orangensaft',
                                description: 'Aus Orangen',
                                price: 1.99,
                                tags: 'Drink',
                                size: '1l',
                                createdAt: '2020-07-22T22:50:23.943Z',
                                updatedAt: '2020-07-22T22:50:23.943Z',
                                amount: 2
                            }
                        ],
                        _id: '5f194e6a11db6f3ec73ea5f4',
                        chat_id: '5f194e6a11db6f3ec73ea5f4',
                        customer_id: {
                            userType: 'Customer',
                            _id: '5f18c64beb0f602c11c64199',
                            company: 'Miso'
                        },
                        supplier_id: {
                            userType: 'Supplier',
                            _id: '5f18c0e5eb0f602c11c64179',
                            company: 'BioLand'
                        },
                        total: 32.06,
                        createdAt: '2020-07-23T08:46:34.359Z',
                        updatedAt: '2020-07-23T08:46:34.359Z',
                        newMessages: 0
                    },
                    {
                        status: 'open',
                        date: '2020-07-22T23:24:20.364Z',
                        products: [
                            {
                                __t: 'productList',
                                _id: '5f18c296eb0f602c11c6417e',
                                name: 'Erdbeermarmelade',
                                description: 'Leckere Erdbeermarmelade',
                                price: 2.5,
                                tags: 'Food',
                                size: '300g',
                                createdAt: '2020-07-22T22:49:58.396Z',
                                updatedAt: '2020-07-22T22:49:58.396Z',
                                amount: 2
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c241eb0f602c11c6417c',
                                name: 'Nuss-Nougat Aufstrich',
                                description: 'Schmeckt fast wie Nutella',
                                price: 2.99,
                                tags: 'Food',
                                size: '500g',
                                createdAt: '2020-07-22T22:48:33.049Z',
                                updatedAt: '2020-07-22T22:48:33.049Z',
                                amount: 1
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c274eb0f602c11c6417d',
                                name: 'Kartoffelchips',
                                description: 'Leckere gesalzene Kartoffelchips',
                                price: 1.89,
                                tags: 'Food',
                                size: '200g',
                                createdAt: '2020-07-22T22:49:24.313Z',
                                updatedAt: '2020-07-22T22:49:24.313Z',
                                amount: 1
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c20beb0f602c11c6417a',
                                name: 'SimplyV',
                                description: 'Leckere vegane Genießerscheiben',
                                price: 2.49,
                                tags: 'Food',
                                size: '100g',
                                createdAt: '2020-07-22T22:47:39.008Z',
                                updatedAt: '2020-07-22T22:47:39.008Z',
                                amount: 2
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c2eeeb0f602c11c64181',
                                name: 'Wasser',
                                description: 'Es ist Wasser',
                                price: 0.12,
                                tags: 'Drink',
                                size: '1l',
                                createdAt: '2020-07-22T22:51:26.031Z',
                                updatedAt: '2020-07-22T22:51:26.031Z',
                                amount: 3
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c2daeb0f602c11c64180',
                                name: 'Bier',
                                description: 'Bier, Bier, Bier',
                                price: 1,
                                tags: 'Drink',
                                size: '300ml',
                                createdAt: '2020-07-22T22:51:06.221Z',
                                updatedAt: '2020-07-22T22:51:06.221Z',
                                amount: 19
                            }
                        ],
                        _id: '5f18caa3eb0f602c11c641cf',
                        chat_id: '5f18caa3eb0f602c11c641cf',
                        customer_id: {
                            userType: 'Customer',
                            _id: '5f18ca6ceb0f602c11c641ce',
                            company: 'Schnitzeljäger'
                        },
                        supplier_id: {
                            userType: 'Supplier',
                            _id: '5f18c0e5eb0f602c11c64179',
                            company: 'BioLand'
                        },
                        total: 34.22,
                        createdAt: '2020-07-22T23:24:20.367Z',
                        updatedAt: '2020-07-22T23:24:20.367Z',
                        newMessages: 0
                    },
                    {
                        status: 'open',
                        date: '2020-07-22T23:21:08.961Z',
                        products: [
                            {
                                __t: 'productList',
                                _id: '5f18c296eb0f602c11c6417e',
                                name: 'Erdbeermarmelade',
                                description: 'Leckere Erdbeermarmelade',
                                price: 2.5,
                                tags: 'Food',
                                size: '300g',
                                createdAt: '2020-07-22T22:49:58.396Z',
                                updatedAt: '2020-07-22T22:49:58.396Z',
                                amount: 3
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c241eb0f602c11c6417c',
                                name: 'Nuss-Nougat Aufstrich',
                                description: 'Schmeckt fast wie Nutella',
                                price: 2.99,
                                tags: 'Food',
                                size: '500g',
                                createdAt: '2020-07-22T22:48:33.049Z',
                                updatedAt: '2020-07-22T22:48:33.049Z',
                                amount: 1
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c2daeb0f602c11c64180',
                                name: 'Bier',
                                description: 'Bier, Bier, Bier',
                                price: 1,
                                tags: 'Drink',
                                size: '300ml',
                                createdAt: '2020-07-22T22:51:06.221Z',
                                updatedAt: '2020-07-22T22:51:06.221Z',
                                amount: 1
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c2eeeb0f602c11c64181',
                                name: 'Wasser',
                                description: 'Es ist Wasser',
                                price: 0.12,
                                tags: 'Drink',
                                size: '1l',
                                createdAt: '2020-07-22T22:51:26.031Z',
                                updatedAt: '2020-07-22T22:51:26.031Z',
                                amount: 1
                            },
                            {
                                __t: 'productList',
                                _id: '5f18c2afeb0f602c11c6417f',
                                name: 'Orangensaft',
                                description: 'Aus Orangen',
                                price: 1.99,
                                tags: 'Drink',
                                size: '1l',
                                createdAt: '2020-07-22T22:50:23.943Z',
                                updatedAt: '2020-07-22T22:50:23.943Z',
                                amount: 1
                            }
                        ],
                        _id: '5f18c9e4eb0f602c11c641b2',
                        chat_id: '5f18c9e4eb0f602c11c641b2',
                        customer_id: {
                            userType: 'Customer',
                            _id: '5f18c64beb0f602c11c64199',
                            company: 'Miso'
                        },
                        supplier_id: {
                            userType: 'Supplier',
                            _id: '5f18c0e5eb0f602c11c64179',
                            company: 'BioLand'
                        },
                        total: 13.6,
                        createdAt: '2020-07-22T23:21:08.963Z',
                        updatedAt: '2020-07-22T23:21:08.963Z',
                        newMessages: 0
                    }
                ],
                error: null,
                loading: false
            }
        }
        wrapper = setUp(initialState)

    })


    it('should call changeStatus when SwipeableListItem swipes right and left ', function () {
        const swipeableList = wrapper.find(SwipeableListItem).at(0)
        let spy = jest.spyOn(wrapper.instance(),'changeStatus');
        swipeableList.prop('swipeRight').action()
        expect(spy).toBeCalledTimes(1)
        swipeableList.prop('swipeLeft').action()
        expect(spy).toBeCalledTimes(2)
    });
})