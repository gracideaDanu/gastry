import React from "react";
import {shallow} from 'enzyme';
import Chat from "./Chat";
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const setUp =(initialstore={})=>{
    const store = mockStore(initialstore);
    
    const mockReplace = jest.fn()
    const history = {
        replace: mockReplace
    }
    const location = {"pathname":"/order/chat","state":{"order":{"status":"open","date":"2020-08-26T12:07:49.034Z","products":[{"__t":"productList","_id":"5f18c60beb0f602c11c64198","name":"Wein","description":"Mhhh, Wein","price":1.98,"tags":"Drink","size":"1l","createdAt":"2020-07-22T23:04:43.695Z","updatedAt":"2020-07-22T23:04:43.695Z","amount":2}],"_id":"5f4650945259ca1738b46dd1","chat_id":"5f4650945259ca1738b46dd1","customer_id":{"userType":"Customer","_id":"5f18c64beb0f602c11c64199","company":"Miso"},"supplier_id":{"userType":"Supplier","_id":"5f18c5a8eb0f602c11c64193","company":"DrinksCo"},"total":3.96,"createdAt":"2020-08-26T12:07:49.104Z","updatedAt":"2020-08-26T12:07:49.104Z","newMessages":0}},"search":"","hash":"","key":"3q347m"}
    window.HTMLElement.prototype.scrollIntoView = function() {};
    const wrapper = shallow(<Chat history={history} store={store} location={location}  />).childAt(0).dive()
    console.debug(wrapper.debug());
    console.debug(wrapper.childAt(0).debug());
    return wrapper
};

/*describe('<Chat/>', () => {

    let wrapper
    beforeEach(() => {
        const initialState = {
            auth: {
                token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMThjMGU1ZWIwZjYwMmMxMWM2NDE3OSIsImlhdCI6MTU5ODM1NTYxNSwiZXhwIjoxNjI5OTEyNTQxfQ.b4zAhwzD2yj1qHkP_Y-8RBKl7Us5ukWTnjLEdua37GM',
                userId: '5f18c0e5eb0f602c11c64179',
                loading: false,
                error: null
            },
            user: {
                user: {
                    address: {
                        street: 'Stuttgarter Straße',
                        streetTwo: '',
                        city: 'Stuttgart',
                        state: 'BW',
                        code: '71332'
                    },
                    userType: 'Customer',
                    _id: '5f18c64beb0f602c11c64199',
                    firstName: 'Dom',
                    lastName: 'Ferrari',
                    email: 'miso@outlook.de',
                    password: '$2a$10$5lzENg9NVhrowGUqzANNuOF7A.piZFFuz6Byw4lffFewZl4kgXYXm',
                    company: 'Miso',
                    orders: [
                        {
                            status: 'open',
                            date: '2020-08-10T11:54:01.416Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f1986bcbed02450280a7d21',
                                    name: 'Snickers',
                                    description: '',
                                    price: 5.19,
                                    tags: 'Food',
                                    size: '10st',
                                    createdAt: '2020-07-23T12:46:52.314Z',
                                    updatedAt: '2020-07-23T12:46:52.314Z',
                                    amount: 2
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c3d0eb0f602c11c64187',
                                    name: 'Kartoffelchips',
                                    description: 'Aus Kartoffeln',
                                    price: 1.78,
                                    tags: 'Food',
                                    size: '200g',
                                    createdAt: '2020-07-22T22:55:12.176Z',
                                    updatedAt: '2020-07-22T22:55:12.176Z',
                                    amount: 2
                                }
                            ],
                            _id: '5f313559635ae0002b3ff218',
                            chat_id: '5f313559635ae0002b3ff218',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c364eb0f602c11c64182',
                            total: 13.94,
                            createdAt: '2020-08-10T11:54:01.558Z',
                            updatedAt: '2020-08-10T11:54:01.558Z'
                        },
                        {
                            status: 'open',
                            date: '2020-08-04T21:46:36.308Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f29d729b22660002b84b475',
                                    name: 'Wurst',
                                    description: 'Gut\n',
                                    price: 555,
                                    tags: 'Drink',
                                    size: 'Kg',
                                    createdAt: '2020-08-04T21:46:17.753Z',
                                    updatedAt: '2020-08-04T21:46:17.753Z',
                                    amount: 1
                                }
                            ],
                            _id: '5f29d73cb22660002b84b476',
                            chat_id: '5f29d73cb22660002b84b476',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f29d6edb22660002b84b471',
                            total: 555,
                            createdAt: '2020-08-04T21:46:36.410Z',
                            updatedAt: '2020-08-04T21:46:36.410Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T18:36:00.221Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f19d842ac0c48002b8f64ba',
                                    name: 'weed',
                                    description: '',
                                    price: 99,
                                    tags: 'Food',
                                    size: '10g',
                                    createdAt: '2020-07-23T18:34:42.887Z',
                                    updatedAt: '2020-07-23T18:34:42.887Z',
                                    amount: 7
                                }
                            ],
                            _id: '5f19d890ac0c48002b8f64bb',
                            chat_id: '5f19d890ac0c48002b8f64bb',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f19d6ecac0c48002b8f64b9',
                            total: 693,
                            createdAt: '2020-07-23T18:36:00.286Z',
                            updatedAt: '2020-07-23T18:36:00.286Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T17:42:38.821Z',
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
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c0e5eb0f602c11c64179',
                            total: 13.07,
                            createdAt: '2020-07-23T17:42:38.890Z',
                            updatedAt: '2020-07-23T17:42:38.890Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T17:42:35.339Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f1986bcbed02450280a7d21',
                                    name: 'Snickers',
                                    description: '',
                                    price: 5.19,
                                    tags: 'Food',
                                    size: '10st',
                                    createdAt: '2020-07-23T12:46:52.314Z',
                                    updatedAt: '2020-07-23T12:46:52.314Z',
                                    amount: 3
                                }
                            ],
                            _id: '5f19cc0bac0c48002b8f649a',
                            chat_id: '5f19cc0bac0c48002b8f649a',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c364eb0f602c11c64182',
                            total: 15.57,
                            createdAt: '2020-07-23T17:42:35.422Z',
                            updatedAt: '2020-07-23T17:42:35.422Z'
                        },
                        {
                            status: 'closed',
                            date: '2020-07-23T12:45:14.670Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f18c3d0eb0f602c11c64187',
                                    name: 'Kartoffelchips',
                                    description: 'Aus Kartoffeln',
                                    price: 1.78,
                                    tags: 'Food',
                                    size: '200g',
                                    createdAt: '2020-07-22T22:55:12.176Z',
                                    updatedAt: '2020-07-22T22:55:12.176Z',
                                    amount: 2
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c3b4eb0f602c11c64186',
                                    name: 'Nutella',
                                    description: 'Die echte!',
                                    price: 2.99,
                                    tags: 'Food',
                                    size: '300g',
                                    createdAt: '2020-07-22T22:54:44.125Z',
                                    updatedAt: '2020-07-22T22:54:44.125Z',
                                    amount: 2
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c38beb0f602c11c64184',
                                    name: 'Milka',
                                    description: 'Leckere Milkaschokolade',
                                    price: 1.45,
                                    tags: 'Food',
                                    size: '100g',
                                    createdAt: '2020-07-22T22:54:03.500Z',
                                    updatedAt: '2020-07-22T22:54:03.500Z',
                                    amount: 3
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c37beb0f602c11c64183',
                                    name: 'KitKat',
                                    description: 'Leckere und originale KitKat',
                                    price: 1,
                                    tags: 'Food',
                                    size: '50g',
                                    createdAt: '2020-07-22T22:53:47.685Z',
                                    updatedAt: '2020-07-22T22:53:47.685Z',
                                    amount: 11
                                }
                            ],
                            _id: '5f19865abed02450280a7d13',
                            chat_id: '5f19865abed02450280a7d13',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c364eb0f602c11c64182',
                            total: 24.89,
                            createdAt: '2020-07-23T12:45:14.716Z',
                            updatedAt: '2020-07-23T12:46:26.420Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T12:43:19.483Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f194f9c11db6f3ec73ea60a',
                                    name: 'Rindfleisch',
                                    description: '',
                                    price: 9.1,
                                    tags: 'Food',
                                    size: '1kg',
                                    createdAt: '2020-07-23T08:51:40.270Z',
                                    updatedAt: '2020-07-23T08:51:40.270Z',
                                    amount: 3
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194f6e11db6f3ec73ea609',
                                    name: 'Tofu',
                                    description: '',
                                    price: 12.5,
                                    tags: 'Food',
                                    size: '5kg',
                                    createdAt: '2020-07-23T08:50:54.135Z',
                                    updatedAt: '2020-07-23T08:50:54.135Z',
                                    amount: 2
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194f5a11db6f3ec73ea608',
                                    name: 'Reis',
                                    description: 'Guter Reis',
                                    price: 8.99,
                                    tags: 'Food',
                                    size: '10kg',
                                    createdAt: '2020-07-23T08:50:34.398Z',
                                    updatedAt: '2020-07-23T08:50:34.398Z',
                                    amount: 11
                                }
                            ],
                            _id: '5f1985e7bed02450280a7d08',
                            chat_id: '5f1985e7bed02450280a7d08',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f194f1911db6f3ec73ea607',
                            total: 151.19,
                            createdAt: '2020-07-23T12:43:19.555Z',
                            updatedAt: '2020-07-23T12:43:19.555Z'
                        },
                        {
                            status: 'closed',
                            date: '2020-07-23T12:37:54.498Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f18c3d0eb0f602c11c64187',
                                    name: 'Kartoffelchips',
                                    description: 'Aus Kartoffeln',
                                    price: 1.78,
                                    tags: 'Food',
                                    size: '200g',
                                    createdAt: '2020-07-22T22:55:12.176Z',
                                    updatedAt: '2020-07-22T22:55:12.176Z',
                                    amount: 3
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c38beb0f602c11c64184',
                                    name: 'Milka',
                                    description: 'Leckere Milkaschokolade',
                                    price: 1.45,
                                    tags: 'Food',
                                    size: '100g',
                                    createdAt: '2020-07-22T22:54:03.500Z',
                                    updatedAt: '2020-07-22T22:54:03.500Z',
                                    amount: 4
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c3b4eb0f602c11c64186',
                                    name: 'Nutella',
                                    description: 'Die echte!',
                                    price: 2.99,
                                    tags: 'Food',
                                    size: '300g',
                                    createdAt: '2020-07-22T22:54:44.125Z',
                                    updatedAt: '2020-07-22T22:54:44.125Z',
                                    amount: 5
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c39deb0f602c11c64185',
                                    name: 'Haribo',
                                    description: 'So viele Geschmackssorten!',
                                    price: 1.96,
                                    tags: 'Food',
                                    size: '100g',
                                    createdAt: '2020-07-22T22:54:21.643Z',
                                    updatedAt: '2020-07-22T22:54:21.643Z',
                                    amount: 11
                                }
                            ],
                            _id: '5f1984a2bed02450280a7cfa',
                            chat_id: '5f1984a2bed02450280a7cfa',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c364eb0f602c11c64182',
                            total: 47.65,
                            createdAt: '2020-07-23T12:37:54.543Z',
                            updatedAt: '2020-07-23T12:40:55.735Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T12:35:24.058Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f18c484eb0f602c11c6418c',
                                    name: 'Serrano Schinken',
                                    description: 'Schinken aus Spanien',
                                    price: 8.49,
                                    tags: 'Food',
                                    size: '500g',
                                    createdAt: '2020-07-22T22:58:12.496Z',
                                    updatedAt: '2020-07-22T22:58:12.496Z',
                                    amount: 2
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c44eeb0f602c11c6418a',
                                    name: 'Salami',
                                    description: 'Gute Salami',
                                    price: 4.96,
                                    tags: 'Food',
                                    size: '500g',
                                    createdAt: '2020-07-22T22:57:18.174Z',
                                    updatedAt: '2020-07-22T22:57:18.174Z',
                                    amount: 3
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c467eb0f602c11c6418b',
                                    name: 'Bierwurst',
                                    description: 'Die gute Bierwurst',
                                    price: 1.99,
                                    tags: 'Food',
                                    size: '200g',
                                    createdAt: '2020-07-22T22:57:43.906Z',
                                    updatedAt: '2020-07-22T22:57:43.906Z',
                                    amount: 1
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c441eb0f602c11c64189',
                                    name: 'Schinken',
                                    description: 'Guter Schinken',
                                    price: 6.99,
                                    tags: 'Food',
                                    size: '500g',
                                    createdAt: '2020-07-22T22:57:05.795Z',
                                    updatedAt: '2020-07-22T22:57:05.795Z',
                                    amount: 11
                                }
                            ],
                            _id: '5f19840bbed02450280a7ced',
                            chat_id: '5f19840bbed02450280a7ced',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c42eeb0f602c11c64188',
                            total: 110.74,
                            createdAt: '2020-07-23T12:35:24.110Z',
                            updatedAt: '2020-07-23T12:35:24.110Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T09:05:15.109Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f194f9c11db6f3ec73ea60a',
                                    name: 'Rindfleisch',
                                    description: '',
                                    price: 9.1,
                                    tags: 'Food',
                                    size: '1kg',
                                    createdAt: '2020-07-23T08:51:40.270Z',
                                    updatedAt: '2020-07-23T08:51:40.270Z',
                                    amount: 3
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194f6e11db6f3ec73ea609',
                                    name: 'Tofu',
                                    description: '',
                                    price: 12.5,
                                    tags: 'Food',
                                    size: '5kg',
                                    createdAt: '2020-07-23T08:50:54.135Z',
                                    updatedAt: '2020-07-23T08:50:54.135Z',
                                    amount: 12
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194f5a11db6f3ec73ea608',
                                    name: 'Reis',
                                    description: 'Guter Reis',
                                    price: 8.99,
                                    tags: 'Food',
                                    size: '10kg',
                                    createdAt: '2020-07-23T08:50:34.398Z',
                                    updatedAt: '2020-07-23T08:50:34.398Z',
                                    amount: 5
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194feb11db6f3ec73ea60d',
                                    name: 'Quellwasser',
                                    description: '',
                                    price: 3.15,
                                    tags: 'Drink',
                                    size: 'Kiste',
                                    createdAt: '2020-07-23T08:52:59.296Z',
                                    updatedAt: '2020-07-23T08:52:59.296Z',
                                    amount: 10
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194fd211db6f3ec73ea60c',
                                    name: 'Pepsi',
                                    description: '',
                                    price: 10,
                                    tags: 'Drink',
                                    size: 'Kiste',
                                    createdAt: '2020-07-23T08:52:34.142Z',
                                    updatedAt: '2020-07-23T08:52:34.142Z',
                                    amount: 4
                                }
                            ],
                            _id: '5f1952ca11db6f3ec73ea638',
                            chat_id: '5f1952ca11db6f3ec73ea638',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f194f1911db6f3ec73ea607',
                            total: 293.75,
                            createdAt: '2020-07-23T09:05:15.171Z',
                            updatedAt: '2020-07-23T09:05:15.171Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T09:03:15.479Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f18c530eb0f602c11c64192',
                                    name: 'Club Mate',
                                    description: 'Die gute Club Mate',
                                    price: 1,
                                    tags: 'Drink',
                                    size: '500ml',
                                    createdAt: '2020-07-22T23:01:04.845Z',
                                    updatedAt: '2020-07-22T23:01:04.845Z',
                                    amount: 8
                                }
                            ],
                            _id: '5f19525311db6f3ec73ea632',
                            chat_id: '5f19525311db6f3ec73ea632',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c4e2eb0f602c11c6418d',
                            total: 8,
                            createdAt: '2020-07-23T09:03:15.524Z',
                            updatedAt: '2020-07-23T09:03:15.524Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T09:00:21.245Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f194f9c11db6f3ec73ea60a',
                                    name: 'Rindfleisch',
                                    description: '',
                                    price: 9.1,
                                    tags: 'Food',
                                    size: '1kg',
                                    createdAt: '2020-07-23T08:51:40.270Z',
                                    updatedAt: '2020-07-23T08:51:40.270Z',
                                    amount: 17
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194f5a11db6f3ec73ea608',
                                    name: 'Reis',
                                    description: 'Guter Reis',
                                    price: 8.99,
                                    tags: 'Food',
                                    size: '10kg',
                                    createdAt: '2020-07-23T08:50:34.398Z',
                                    updatedAt: '2020-07-23T08:50:34.398Z',
                                    amount: 5
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194f6e11db6f3ec73ea609',
                                    name: 'Tofu',
                                    description: '',
                                    price: 12.5,
                                    tags: 'Food',
                                    size: '5kg',
                                    createdAt: '2020-07-23T08:50:54.135Z',
                                    updatedAt: '2020-07-23T08:50:54.135Z',
                                    amount: 6
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194feb11db6f3ec73ea60d',
                                    name: 'Quellwasser',
                                    description: '',
                                    price: 3.15,
                                    tags: 'Drink',
                                    size: 'Kiste',
                                    createdAt: '2020-07-23T08:52:59.296Z',
                                    updatedAt: '2020-07-23T08:52:59.296Z',
                                    amount: 15
                                }
                            ],
                            _id: '5f1951a511db6f3ec73ea626',
                            chat_id: '5f1951a511db6f3ec73ea626',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f194f1911db6f3ec73ea607',
                            total: 321.9,
                            createdAt: '2020-07-23T09:00:21.321Z',
                            updatedAt: '2020-07-23T09:00:21.321Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T09:00:01.037Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f194f9c11db6f3ec73ea60a',
                                    name: 'Rindfleisch',
                                    description: '',
                                    price: 9.1,
                                    tags: 'Food',
                                    size: '1kg',
                                    createdAt: '2020-07-23T08:51:40.270Z',
                                    updatedAt: '2020-07-23T08:51:40.270Z',
                                    amount: 17
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194f5a11db6f3ec73ea608',
                                    name: 'Reis',
                                    description: 'Guter Reis',
                                    price: 8.99,
                                    tags: 'Food',
                                    size: '10kg',
                                    createdAt: '2020-07-23T08:50:34.398Z',
                                    updatedAt: '2020-07-23T08:50:34.398Z',
                                    amount: 5
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194f6e11db6f3ec73ea609',
                                    name: 'Tofu',
                                    description: '',
                                    price: 12.5,
                                    tags: 'Food',
                                    size: '5kg',
                                    createdAt: '2020-07-23T08:50:54.135Z',
                                    updatedAt: '2020-07-23T08:50:54.135Z',
                                    amount: 6
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194feb11db6f3ec73ea60d',
                                    name: 'Quellwasser',
                                    description: '',
                                    price: 3.15,
                                    tags: 'Drink',
                                    size: 'Kiste',
                                    createdAt: '2020-07-23T08:52:59.296Z',
                                    updatedAt: '2020-07-23T08:52:59.296Z',
                                    amount: 15
                                }
                            ],
                            _id: '5f19519011db6f3ec73ea61a',
                            chat_id: '5f19519011db6f3ec73ea61a',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f194f1911db6f3ec73ea607',
                            total: 321.9,
                            createdAt: '2020-07-23T09:00:01.081Z',
                            updatedAt: '2020-07-23T09:00:01.081Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T08:59:36.369Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f194f9c11db6f3ec73ea60a',
                                    name: 'Rindfleisch',
                                    description: '',
                                    price: 9.1,
                                    tags: 'Food',
                                    size: '1kg',
                                    createdAt: '2020-07-23T08:51:40.270Z',
                                    updatedAt: '2020-07-23T08:51:40.270Z',
                                    amount: 17
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194f5a11db6f3ec73ea608',
                                    name: 'Reis',
                                    description: 'Guter Reis',
                                    price: 8.99,
                                    tags: 'Food',
                                    size: '10kg',
                                    createdAt: '2020-07-23T08:50:34.398Z',
                                    updatedAt: '2020-07-23T08:50:34.398Z',
                                    amount: 5
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194f6e11db6f3ec73ea609',
                                    name: 'Tofu',
                                    description: '',
                                    price: 12.5,
                                    tags: 'Food',
                                    size: '5kg',
                                    createdAt: '2020-07-23T08:50:54.135Z',
                                    updatedAt: '2020-07-23T08:50:54.135Z',
                                    amount: 6
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f194feb11db6f3ec73ea60d',
                                    name: 'Quellwasser',
                                    description: '',
                                    price: 3.15,
                                    tags: 'Drink',
                                    size: 'Kiste',
                                    createdAt: '2020-07-23T08:52:59.296Z',
                                    updatedAt: '2020-07-23T08:52:59.296Z',
                                    amount: 15
                                }
                            ],
                            _id: '5f19517811db6f3ec73ea60e',
                            chat_id: '5f19517811db6f3ec73ea60e',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f194f1911db6f3ec73ea607',
                            total: 321.9,
                            createdAt: '2020-07-23T08:59:36.404Z',
                            updatedAt: '2020-07-23T08:59:36.404Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-23T08:46:34.343Z',
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
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c0e5eb0f602c11c64179',
                            total: 32.06,
                            createdAt: '2020-07-23T08:46:34.422Z',
                            updatedAt: '2020-07-23T08:46:34.422Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-22T23:21:35.223Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f18c60beb0f602c11c64198',
                                    name: 'Wein',
                                    description: 'Mhhh, Wein',
                                    price: 1.98,
                                    tags: 'Drink',
                                    size: '1l',
                                    createdAt: '2020-07-22T23:04:43.695Z',
                                    updatedAt: '2020-07-22T23:04:43.695Z',
                                    amount: 4
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c5ebeb0f602c11c64196',
                                    name: 'Traubensaft',
                                    description: 'Ein wenig Traubensaft schadet nie',
                                    price: 1.98,
                                    tags: 'Drink',
                                    size: '1l',
                                    createdAt: '2020-07-22T23:04:11.368Z',
                                    updatedAt: '2020-07-22T23:04:11.368Z',
                                    amount: 1
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c5d5eb0f602c11c64195',
                                    name: 'Coca Cola',
                                    description: 'Nur die klassische Cola',
                                    price: 1,
                                    tags: 'Drink',
                                    size: '1l',
                                    createdAt: '2020-07-22T23:03:49.380Z',
                                    updatedAt: '2020-07-22T23:03:49.380Z',
                                    amount: 3
                                }
                            ],
                            _id: '5f18c9ffeb0f602c11c641c0',
                            chat_id: '5f18c9ffeb0f602c11c641c0',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c5a8eb0f602c11c64193',
                            total: 12.9,
                            createdAt: '2020-07-22T23:21:35.264Z',
                            updatedAt: '2020-07-22T23:21:35.264Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-22T23:21:08.958Z',
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
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c0e5eb0f602c11c64179',
                            total: 13.6,
                            createdAt: '2020-07-22T23:21:09.002Z',
                            updatedAt: '2020-07-22T23:21:09.002Z'
                        },
                        {
                            status: 'open',
                            date: '2020-07-22T23:09:22.757Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f18c60beb0f602c11c64198',
                                    name: 'Wein',
                                    description: 'Mhhh, Wein',
                                    price: 1.98,
                                    tags: 'Drink',
                                    size: '1l',
                                    createdAt: '2020-07-22T23:04:43.695Z',
                                    updatedAt: '2020-07-22T23:04:43.695Z',
                                    amount: 3
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c5ebeb0f602c11c64196',
                                    name: 'Traubensaft',
                                    description: 'Ein wenig Traubensaft schadet nie',
                                    price: 1.98,
                                    tags: 'Drink',
                                    size: '1l',
                                    createdAt: '2020-07-22T23:04:11.368Z',
                                    updatedAt: '2020-07-22T23:04:11.368Z',
                                    amount: 2
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c5d5eb0f602c11c64195',
                                    name: 'Coca Cola',
                                    description: 'Nur die klassische Cola',
                                    price: 1,
                                    tags: 'Drink',
                                    size: '1l',
                                    createdAt: '2020-07-22T23:03:49.380Z',
                                    updatedAt: '2020-07-22T23:03:49.380Z',
                                    amount: 2
                                }
                            ],
                            _id: '5f18c722eb0f602c11c641a8',
                            chat_id: '5f18c722eb0f602c11c641a8',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c5a8eb0f602c11c64193',
                            total: 11.9,
                            createdAt: '2020-07-22T23:09:22.856Z',
                            updatedAt: '2020-07-22T23:09:22.856Z'
                        },
                        {
                            status: 'closed',
                            date: '2020-07-22T23:07:01.059Z',
                            products: [
                                {
                                    __t: 'productList',
                                    _id: '5f18c3d0eb0f602c11c64187',
                                    name: 'Kartoffelchips',
                                    description: 'Aus Kartoffeln',
                                    price: 1.78,
                                    tags: 'Food',
                                    size: '200g',
                                    createdAt: '2020-07-22T22:55:12.176Z',
                                    updatedAt: '2020-07-22T22:55:12.176Z',
                                    amount: 1
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c39deb0f602c11c64185',
                                    name: 'Haribo',
                                    description: 'So viele Geschmackssorten!',
                                    price: 1.96,
                                    tags: 'Food',
                                    size: '100g',
                                    createdAt: '2020-07-22T22:54:21.643Z',
                                    updatedAt: '2020-07-22T22:54:21.643Z',
                                    amount: 1
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c37beb0f602c11c64183',
                                    name: 'KitKat',
                                    description: 'Leckere und originale KitKat',
                                    price: 1,
                                    tags: 'Food',
                                    size: '50g',
                                    createdAt: '2020-07-22T22:53:47.685Z',
                                    updatedAt: '2020-07-22T22:53:47.685Z',
                                    amount: 1
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c38beb0f602c11c64184',
                                    name: 'Milka',
                                    description: 'Leckere Milkaschokolade',
                                    price: 1.45,
                                    tags: 'Food',
                                    size: '100g',
                                    createdAt: '2020-07-22T22:54:03.500Z',
                                    updatedAt: '2020-07-22T22:54:03.500Z',
                                    amount: 4
                                },
                                {
                                    __t: 'productList',
                                    _id: '5f18c3b4eb0f602c11c64186',
                                    name: 'Nutella',
                                    description: 'Die echte!',
                                    price: 2.99,
                                    tags: 'Food',
                                    size: '300g',
                                    createdAt: '2020-07-22T22:54:44.125Z',
                                    updatedAt: '2020-07-22T22:54:44.125Z',
                                    amount: 2
                                }
                            ],
                            _id: '5f18c694eb0f602c11c6419a',
                            chat_id: '5f18c694eb0f602c11c6419a',
                            customer_id: '5f18c64beb0f602c11c64199',
                            supplier_id: '5f18c364eb0f602c11c64182',
                            total: 16.52,
                            createdAt: '2020-07-22T23:07:01.158Z',
                            updatedAt: '2020-07-23T12:41:48.908Z'
                        }
                    ],
                    __v: 0
                },
                error: null,
                loading: false
            }
        }
        wrapper = setUp(initialState)
    })

    it('should ', function () {
        console.log(wrapper.debug())
        wrapper.instance().messagesEnd = <p>Hi</p>
    });
}) */