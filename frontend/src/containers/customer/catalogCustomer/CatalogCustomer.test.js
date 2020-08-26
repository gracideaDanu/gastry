import React from "react";
import {shallow} from 'enzyme';
import CatalogCustomer from "./CatalogCustomer";
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import SupplierCatList from "../../../components/list/CatalogCustomerRow.js/CatalogCustomerRow";
import Search from "../../../components/search/Search";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const setUp =(initialstore={})=>{
    const store = mockStore(initialstore);
    console.debug(store)

    const mockReplace = jest.fn()
    const history = {
        replace: mockReplace
    }
    const location = {"pathname":"/catalog/BestCocktail","state":{"supplierId":"5f18c4e2eb0f602c11c6418d","supplierName":"BestCocktail","category":"drinks"},"search":"","hash":"","key":"lwx3td"}
    const wrapper = shallow(<CatalogCustomer history={history} store={store} location={location}  />).childAt(0).dive()
    console.debug(wrapper.debug());
    console.debug(wrapper.childAt(0).debug());
    return wrapper
};


describe('<CatalogCustomer/>', () => {

    let wrapper
    beforeEach(() => {
       const  state = {
           customerCatalog: {
               catalog: [
                   {
                       _id: '5f18c530eb0f602c11c64192',
                       name: 'Club Mate',
                       description: 'Die gute Club Mate',
                       price: 1,
                       tags: 'Drink',
                       size: '500ml',
                       createdAt: '2020-07-22T23:01:04.845Z',
                       updatedAt: '2020-07-22T23:01:04.845Z'
                   },
                   {
                       _id: '5f18c51beb0f602c11c64191',
                       name: 'Rotwein',
                       description: 'Für einen schönen Abend',
                       price: 2.98,
                       tags: 'Drink',
                       size: '1l',
                       createdAt: '2020-07-22T23:00:43.091Z',
                       updatedAt: '2020-07-22T23:00:43.091Z'
                   },
                   {
                       _id: '5f18c50eeb0f602c11c64190',
                       name: 'Weißwein',
                       description: 'Perfekt für eine Weißweinschorle',
                       price: 2.99,
                       tags: 'Drink',
                       size: '1l',
                       createdAt: '2020-07-22T23:00:30.069Z',
                       updatedAt: '2020-07-22T23:00:30.069Z'
                   },
                   {
                       _id: '5f18c4feeb0f602c11c6418f',
                       name: 'Wein',
                       description: 'Guter Wein',
                       price: 4.96,
                       tags: 'Drink',
                       size: '1l',
                       createdAt: '2020-07-22T23:00:14.054Z',
                       updatedAt: '2020-07-22T23:00:14.054Z'
                   },
                   {
                       _id: '5f18c4f2eb0f602c11c6418e',
                       name: 'Bier',
                       description: 'Bier Bier Bier\n',
                       price: 24.99,
                       tags: 'Drink',
                       size: 'Kiste',
                       createdAt: '2020-07-22T23:00:02.171Z',
                       updatedAt: '2020-07-22T23:00:02.171Z'
                   }
               ],
               error: null,
               loading: false
           },
           basket: {
               baskets: [
                   {
                       basketItems: [
                           {
                               _id: '5f18d871ad145e4d9902ad26',
                               name: 'H-Milch 2,5% Fettgehalt',
                               description: 'Frische Milch von glücklichen Kühen.',
                               price: 1.19,
                               tags: 'Food',
                               size: '1l',
                               createdAt: '2020-07-23T00:23:13.024Z',
                               updatedAt: '2020-07-23T00:23:13.024Z',
                               amount: 3
                           },
                           {
                               _id: '5f18d7dbad145e4d9902ad25',
                               name: 'Eier aus Freilandhaltung',
                               description: 'Frische Eier aus der Freilandhaltung. Unsere Hühner waren glücklich.',
                               price: 2.09,
                               tags: 'Food',
                               size: '24st.',
                               createdAt: '2020-07-23T00:20:43.325Z',
                               updatedAt: '2020-07-23T00:20:43.325Z',
                               amount: 2
                           }
                       ],
                       supplierId: '5f18d77bad145e4d9902ad24'
                   }
               ],
               errors: []
           }
        }
        wrapper = setUp(state)
    })


    it('should render 5 drinks elements ', function () {
        const listItem = wrapper.find(SupplierCatList)
        expect(listItem).toHaveLength(5)
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