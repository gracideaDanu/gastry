import React, {Component} from 'react';
import CustomerLayout from "../common/CustomerLayout";

class Search extends Component {

    render() {
        return (
            <CustomerLayout
                className='container-fluid'
                title={` Search`}
                description='stuff'>
                <div>
                    <h1 className={"display-3"}>Search Component</h1>
                </div>
            </CustomerLayout>
        );
    }


}

export default Search;
