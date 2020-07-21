import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../../../redux/actions";
import SupplierLayout from "../supplierLayout/SupplierLayout";
import SupplierCatListView from "../../../components/list/CatalogSupplierRow/SupplierCatListView";
import {SwipeableDrawer, Fab, Divider} from "@material-ui/core";
import {Container} from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';

import './Catalog.scss'


class Catalog extends Component {

    state = {
        catalog: [],
        errors: {},
        showModal: false,
        index: -1,
        currentItem: {
            tags: "",
            name: "",
            price: "",
            size: "",
            description: ""
        },
        option: "add",
        basket: [],
        anchor: false
    };


    componentDidMount() {
        console.log()

        this.props.fetchCatalog({
            token: this.props.token
        });


    }

    componentWillUnmount() {
        this.props.flush();
        console.log("I flushed catalog S")
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.items !== this.props.items){
            this.setState({
                catalog: this.props.items
            })
        }


    }



    validateForm = (errors) => {
        let valid = true;
        console.log(this.state.errors);
        Object.values(errors).forEach(

            // if we have an error string set valid to false
            (val) =>  console.log(val)
        );
        Object.values(errors).forEach(

            // if we have an error string set valid to false
            (val) =>  val.length > 0 && (valid = false)
        );
        return valid;
    }

    validationHandler = (elementType, value) => {
        let errors = this.state.errors;
        console.log(value);
        console.log(elementType);
        switch (elementType) {
            case 'name':
                errors.name =
                    value.length < 2
                        ? 'Product name must be 2 characters long!'
                        : '';
                break;

            case 'size':
                errors.size =
                    value.length < 2
                        ? 'Product size must be 2 characters long!'
                        : '';
                break;

            case 'price':
                errors.price =
                    value.length < 1
                        ? 'Product price is required!'
                        : '';
                const priceRegex = new RegExp("[0-9]+([./,][0-9]+)?");
                priceRegex.test(value) ? errors.price = errors.price : errors.price = errors.price + " Nutzen Sie nur Zahlen und ein Komma"
                break;
            case 'tags':
                errors.tags =
                    value === "Food" || value === "Drink"
                        ? ''
                        : 'Product tags must either be "Food" or "Drink"';
                break;
            case 'description':
                errors.description =
                    value.length < 10
                        ? 'Product description must be at least 10 characters long'
                        : '';
                break;
            default:
                break;
        }
        console.log(errors);
        this.setState({
            ...this.state,
            errors: errors
        })
    }


    onChange = (e, i) => {
        e.preventDefault();
        const property = e.target.name;
        let value = e.target.value;
        console.log(property);
        property === "price" && (value = Math.round((parseFloat(value) + Number.EPSILON) * 100) / 100);
        this.validationHandler(property,value);





        const item = {
            ...this.state.currentItem
        };
        item[property] = value;
        this.setState({
            ...this.state,
            currentItem: item
        })

    };

    modifyItemHandler = (e) => {
        e.preventDefault();
        if(this.validateForm(this.state.errors)){
            const modifiedItem = this.state.currentItem;
            this.props.modifyItem({
                token: this.props.token,
                data: modifiedItem
            });
            this.toggle(false,-1)

        }
        else {

        }
    }
    addItemHandler = (e) => {
        e.preventDefault();
        if(this.validateForm(this.state.errors)){
            const itemToAdd = this.state.currentItem;
            this.props.addItem({
                token: this.props.token,
                data: itemToAdd
            })
            this.toggle(false,-1)
        }
        else {

        }
    };



    toggleDrawer = (open) => (event) => {
        console.log("hi toggle");
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        const errors = {

            name: 'Product name is required',
            price: 'Product price is required',
            size: 'Product size is required',
            tags: 'Product tag is required' ,
            description:  'Product description is required' ,


        }
        console.log("why no error")

        this.setState({...this.state, anchor: open, errors: errors})

    };

    toggle = (open,i) => {
        console.log("hoi");
        let currentItem =  {
            tags: "",
            name: "",
            price: "",
            size: "",
            description: ""
        }
        let errors = {}
        let option = ""
        let index = -1;
        console.log("why")
        console.log(open)
        console.log(i)
        if (!this.state.anchor && i >= 0) {
            index = i;
            currentItem = this.state.catalog[i];
            option = "modify";
        }
        else if(!this.state.anchor && i < 0) {
            console.log("im in there elsing"
            )
            errors = {
                name: 'Product name is required',
                price: 'Product price is required',
                size: 'Product size is required',
                tags: 'Product tag is required' ,
                description:  'Product description is required' ,

            }
            option = "add"
        }



        this.setState({
            ...this.state,
            index: index,
            currentItem: currentItem,
            errors: errors,
            option: option,
            anchor: open
        })

    };

    list = () => (

        <div
            className="bottom"
            role="presentation"

        >
            <div className="row centerRow">
                <div className="col-6">
                    <h4>Add Item</h4>

                </div>
                <div className="col-3 sheet">
                    {this.state.option === "modify"
                        ?                     <button className="button yellow-btn text-center" onClick={(e) => this.modifyItemHandler(e)}>Save</button>
                        :                     <button className="button yellow-btn text-center" onClick={(e) => this.addItemHandler(e)}>Save</button>

                    }
                </div>
                <div className="col-3 sheet">            <button className="button red-btn" onClick={() => this.toggle(false,-1)}>Cancel</button>
                </div>
            </div>
            <Divider/>

            <div className={ this.state.errors.name === "" ? "formGroup item setMargin" : "formGroup item unsetMargin"}>
                <label>Name </label>
                <input autoComplete="off" value={this.state.currentItem['name']} name="name"  onChange={(e) => this.onChange(e, this.state.index)}/>

            </div>
            <div className="errorMessage">
                <p>{this.state.errors.name}</p>
            </div>

            <div className={ this.state.errors.tags === "" ? "formGroup item setMargin" : "formGroup item unsetMargin"}>
                <label>Tag</label>
                <select className="select-category" defaultValue="-" name="tags" onChange={(e) => this.onChange(e, this.state.index)}>
                    <option value="-">-</option>
                    {this.props.userOffer === "both"
                        ? <> <option value="Food">Food</option>
                            <option value="Drink">Drink</option> </>
                        : null
                    }{this.props.userOffer === "food"
                    ? <option value="Food">Food</option>

                    : null
                }{this.props.userOffer === "drinks"
                    ? <option value="Drink">Drink</option>

                    : null
                }
                </select>
            </div>
            <div className="errorMessage">
                <p>{this.state.errors.tags}</p>
            </div>


            <div className={ this.state.errors.size === "" ? "formGroup item setMargin" : "formGroup item unsetMargin"}>
                <label>Size</label>
                <input autoComplete="off" value={this.state.currentItem['size']} name="size"  onChange={(e) => this.onChange(e, this.state.index)}/>
            </div>
            <div className="errorMessage">
                <p>{this.state.errors.size}</p>
            </div>

            <div className={ this.state.errors.price === "" ? "formGroup item setMargin" : "formGroup item unsetMargin"}>
                <label>Price</label>
                <input   autoComplete="off" value={this.state.currentItem['price']} name="price" type="number" step="0.01"  pattern="[0-9]+([,\.][0-9]+)?"  onChange={(e) => this.onChange(e, this.state.index)}/>
                <p className="priceStyling">€</p>
            </div>
            <div className="errorMessage">
                <p>{this.state.errors.price}</p>
            </div>
            <label style={{"margin-left":"1.2em"}}>Description</label>
            <div className={ this.state.errors.description === "" ? "formGroup item setMargin" : "formGroup item unsetMargin"}>
                <textarea value={this.state.currentItem['description']} onChange={(e) => this.onChange(e, this.state.index)} className="form-control" rows="3" maxLength="100" name="description"/>
            </div>
            <div className="errorMessage">
                <p>{this.state.errors.description}</p>
            </div>

        </div>
    );







    ;

    render() {
        const catArray = this.state.catalog.map((item, index) =>
            (
                <SupplierCatListView  index={index} showModal={this.state.showModal}  toggle={() => this.toggle(true, index)} deleteHanlder={(event) => this.props.deleteItem({token: this.props.token, itemId: event.target.value})} item={item}></SupplierCatListView>

            ));
        return (
            <SupplierLayout title="Catalog" location="catalog">
                <div>

                    {catArray}

                    <React.Fragment key={"bottom"}>
                        <SwipeableDrawer style={{backgroundColor: "transparent"}}
                                         anchor={"bottom"}
                                         open={this.state.anchor}
                                         onClose={this.toggleDrawer( false)}
                                         onOpen={this.toggleDrawer( true)}
                        >
                            {this.list("bottom")}
                        </SwipeableDrawer>
                    </React.Fragment>


                </div>
                <footer className="fixed-bottom fab">
                    <Container>
                        <Fab onClick={() => this.toggle(true,-1)}> <AddIcon></AddIcon>  </Fab>

                    </Container>

                </footer>


            </SupplierLayout>
        );
    }
}


const mapsStateToProps = (state) => {
    return {
        token: state.auth.token,
        items: state.cat.items,
        userOffer: state.user.user.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCatalog: (payload) => dispatch(actions.fetchCatalog(payload)),
        addItem: (payload) => dispatch(actions.addItemCatalog(payload)),
        deleteItem: (payload) => dispatch(actions.deleteItemCatalog(payload)),
        modifyItem: (payload) => dispatch(actions.modifyItemCatalog(payload)),
        flush: () => dispatch(actions.flushCatalog())

    }
};

export default connect(mapsStateToProps, mapDispatchToProps)(Catalog);
