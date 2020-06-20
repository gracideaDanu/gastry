import React, {useState, useEffect, Component} from 'react';
import SupplierLayout from '../common/SupplierLayout';
import UserLayout from "../common/CustomerLayout";

class HomeCustomer extends Component{



    render() {
        return  (
            <UserLayout
                className='container-fluid'
                title='HomeCustomer Page'
                description='Node React Gastry Navigation'
            >


                <h2 className='mb-4'>New Arrivals</h2>
                <div className='row'>

                </div>

                <h2 className='mb-4'>Best Sellers</h2>
                <div className='row'>

                </div>

            </UserLayout>
        )
    }


}


export default HomeCustomer;
