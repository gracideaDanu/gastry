import React, {useState, useEffect, Component} from 'react';
import SupplierLayout from '../common/SupplierLayout';
import UserLayout from "../common/CustomerLayout";
import SuppliersList from '../suppliersList/SuppliersList'

class HomeCustomer extends Component{



    render() {
        return  (
            <UserLayout
                className='container-fluid'
                title='HomeCustomer Page'
                description='Node React Gastry Navigation'
            >
                <h2 className='mb-4'>Bei wem möchtest du bestellen?</h2>
                <SuppliersList/>

            </UserLayout>
        )
    }


}


export default HomeCustomer;
