import React, { Component} from 'react';
import Layout from '../common/Layout';

class Home extends Component{



    render() {
        return  (
            <Layout
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

            </Layout>
        )
    }


}


export default Home;
