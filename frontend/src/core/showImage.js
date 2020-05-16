import React from 'react';
import { API_AUTH } from '../config';


const ShowImage = ({ item, url }) => (
    <div className='product-img'>
        <img 
            src={`${API_AUTH}/${url}/photo/${item._id}`} 
            alt={item.name} 
            className='mb-3'
            style={{ maxHeight: '100%', maxWidth: '100%'}}
        />
    </div>
)

export default ShowImage;


//product/photo/:productId