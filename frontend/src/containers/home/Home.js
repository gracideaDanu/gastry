import React, {useState, useEffect, Component} from 'react';
import Layout from '../common/Layout';
import UserLayout from "../common/UserLayout";

class Home extends Component{



    render() {
        return  (
            <UserLayout
                className='container-fluid'
                title='Home Page'
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


export default Home;
