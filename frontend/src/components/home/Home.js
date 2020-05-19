import React, { useState, useEffect} from 'react';
import Layout from '../../core/Layout';
import Card from './card';

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    return  (
        <Layout 
            className='container-fluid' 
            title='Home Page' 
            description='Node React Gastry App'
        >


            <h2 className='mb-4'>New Arrivals</h2>
                <div className='row'>
                    {productsByArrival.map((product, i) => (
                    <div key={i} className='col-4 mb-3'>
                        <Card  product={product}/>
                    </div>
                    ))}
                </div>
        
            <h2 className='mb-4'>Best Sellers</h2>
               <div className='row'>
                    {productsBySell.map((product, i) => (
                        <div key={i} className='col-4 col-3'> 
                            <Card product={product}/>
                        </div>
                    ))}     
               </div>
            
        </Layout>
    )
}


export default Home;