import React, { useState, useEffect} from 'react';
import Layout from '../common/Layout';

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

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


export default Home;