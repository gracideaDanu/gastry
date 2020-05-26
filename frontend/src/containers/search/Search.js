import React, {Component} from 'react';
import UserLayout from "../common/UserLayout";

class Search extends Component {

    render() {
        return (
            <UserLayout
                className='container-fluid'
                title={` Search`}
                description='stuff'>
                <div>
                    <h1 className={"display-3"}>Search Component</h1>
                </div>
            </UserLayout>
        );
    }


}

export default Search;
