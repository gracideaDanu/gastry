import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../../../redux/actions";
import SupplierLayout from "../supplierLayout/SupplierLayout";
import SupplierCatListView from "../../../components/list/CatalogSupplierRow/SupplierCatListView";
import {SwipeableDrawer, Fab, Divider} from "@material-ui/core";
import {Container} from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';
import {
    SwipeableList,
    SwipeableListItem
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

import './Catalog.scss'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import deleteIcon from "../../../assets/icons/bin.svg";
import edit from "../../../assets/icons/pen.svg"
import Accordion from "react-bootstrap/Accordion";


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

        if (prevProps.items !== this.props.items) {
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
            (val) => console.log(val)
        );
        Object.values(errors).forEach(
            // if we have an error string set valid to false
            (val) => val.length > 0 && (valid = false)
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
                        ? 'Produktname muss l??nger als zwei Zeichen sein!'
                        : '';
                break;

            case 'size':
                errors.size =
                    value.length < 2
                        ? 'Produktgr????e muss mindestens als zwei Zeichen sein!'
                        : '';
                break;

            case 'price':
                errors.price =
                    value.length < 1
                        ? 'Produktpreis wird ben??tigt'
                        : '';
                const priceRegex = new RegExp("[0-9]+([./,][0-9]+)?");
                priceRegex.test(value) ? errors.price = errors.price : errors.price = errors.price + " Nutzen Sie nur Zahlen und ein Komma"
                break;
            case 'tags':
                errors.tags =
                    value === "Food" || value === "Drink"
                        ? ''
                        : 'Art muss entweder Lebensmittel oder Getr??nk sein';
                break;
            /*case 'description':
                errors.description =
                    value.length < 10
                        ? 'Product description must be at least 10 characters long'
                        : '';
                break; */
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
        this.validationHandler(property, value);


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
        if (this.validateForm(this.state.errors)) {
            const modifiedItem = this.state.currentItem;
            this.props.modifyItem({
                token: this.props.token,
                data: modifiedItem
            });
            this.toggle(false, -1)

        } else {

        }
    }
    addItemHandler = (e) => {
        e.preventDefault();
        if (this.validateForm(this.state.errors)) {
            const itemToAdd = this.state.currentItem;
            this.props.addItem({
                token: this.props.token,
                data: itemToAdd
            })
            this.toggle(false, -1)
        } else {

        }
    };


    toggleDrawer = (open) => (event) => {
        console.log("hi toggle");
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        const errors = {

            name: 'Produktname muss l??nger als zwei Zeichen sein!',
            price: 'Produktpreis wird ben??tigt',
            size: 'Produktgr????e muss mindestens als zwei Zeichen sein!',
            tags: 'Art muss entweder Lebensmittel oder Getr??nk sein' ,



        };
        console.log("why no error")

        this.setState({...this.state, anchor: open, errors: errors})

    };

    toggle = (open, i) => {
        console.log("hoi");
        let currentItem = {
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
        } else if (!this.state.anchor && i < 0) {
            console.log("im in there elsing"
            )
             errors = {

                name: 'Produktname muss l??nger als zwei Zeichen sein!',
                price: 'Produktpreis wird ben??tigt',
                size: 'Produktgr????e muss mindestens als zwei Zeichen sein!',
                tags: 'Art muss entweder Lebensmittel oder Getr??nk sein' ,



            };
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
                    <h5>Produkt hinzuf??gen</h5>
                </div>
                <div className="col-6 sheet">
                    <button className="button red-btn" onClick={() => this.toggle(false, -1)}>Abbrechen</button>
                </div>
            </div>
            <Divider style={{marginBottom: "1rem"}}/>

            <div className={this.state.errors.name === "" ? "formGroup item setMargin" : "formGroup item unsetMargin"}>
                <label>Name: </label>
                <input autoComplete="off" value={this.state.currentItem['name']} name="name"
                       onChange={(e) => this.onChange(e, this.state.index)}/>

            </div>
            <div className="errorMessage">
                <p>{this.state.errors.name}</p>
            </div>

            <div className={this.state.errors.tags === "" ? "formGroup item setMargin" : "formGroup item unsetMargin"}>
                <label>Tag</label>
                <select className="select-category" defaultValue="-" name="tags"
                        onChange={(e) => this.onChange(e, this.state.index)}>
                    <option value="-">-</option>
                    {this.props.userOffer === "both"
                        ? <>
                            <option value="Food">Lebensmittel</option>
                            <option value="Drink">Getr??nke</option>
                        </>
                        : null
                    }{this.props.userOffer === "food"
                    ? <option value="Food">Lebensmittel</option>

                    : null
                }{this.props.userOffer === "drinks"
                    ? <option value="Drink">Getr??nke</option>

                    : null
                }
                </select>
            </div>
            <div className="errorMessage">
                <p>{this.state.errors.tags}</p>
            </div>


            <div className={this.state.errors.size === "" ? "formGroup item setMargin" : "formGroup item unsetMargin"}>
                <label>Einheit: </label>
                <input autoComplete="off" value={this.state.currentItem['size']} name="size"
                       onChange={(e) => this.onChange(e, this.state.index)}/>
            </div>
            <div className="errorMessage">
                <p>{this.state.errors.size}</p>
            </div>

            <div className={this.state.errors.price === "" ? "formGroup item setMargin" : "formGroup item unsetMargin"}>
                <label>Preis: </label>
                <input autoComplete="off" value={this.state.currentItem['price']} name="price" type="number" step="0.01"
                       pattern="[0-9]+([,\.][0-9]+)?" onChange={(e) => this.onChange(e, this.state.index)}/>
                <p className="priceStyling">???</p>
            </div>
            <div className="errorMessage">
                <p>{this.state.errors.price}</p>
            </div>
            <label style={{"margin-left": "1.2em"}}>Beschreibung</label>
            <div
                className={this.state.errors.description === "" ? "formGroup item setMargin" : "formGroup item unsetMargin"}>
                <textarea value={this.state.currentItem['description']}
                          onChange={(e) => this.onChange(e, this.state.index)} className="form-control" rows="3"
                          maxLength="100" name="description"/>
            </div>
            <div className="errorMessage">
                <p>{this.state.errors.description}</p>
            </div>
            <div className="">
                {this.state.option === "modify"
                    ? <button className="button yellow-btn text-center"
                              onClick={(e) => this.modifyItemHandler(e)}>Speichern</button>
                    : <button className="button yellow-btn text-center"
                              onClick={(e) => this.addItemHandler(e)}>Speichern</button>

                }
            </div>

        </div>
    );


    ;

    getCatArray = () =>  {
        if (this.state.catalog){
            if (this.state.catalog.length <= 0){
                let empty = <div style={{'text-align':'center', 'margin-top': "3rem"}}>  <h5 style={{'margin-top':"8rem"}}>Du hast noch keine Produkte hinzugef??gt </h5></div>

                return empty
            }

        }
        const catArray = this.state.catalog.map((item, index) =>
            (
                <SwipeableListItem
                    swipeLeft={{
                        content:
                            <Container style={{paddingRight:"0"}}>
                                <Card style={{backgroundColor: "#ff8282",padding: "0.9rem 0.8rem"}}>
                                    <Card.Header className={"d-flex justify-content-end"} style={{backgroundColor:"transparent",border:"none"}}>
                                        <img src={deleteIcon} width={60} height={60} alt={"l??schen"}/>
                                    </Card.Header>
                                </Card>
                            </Container>,
                        action: () => this.props.deleteItem({
                            token: this.props.token,
                            itemId: item._id
                        })
                    }}
                    swipeRight={{
                        content:
                            <Container style={{paddingLeft:"0"}}>
                                <Card style={{backgroundColor: "#9CBB49",padding: "0.9rem 0.8rem"}}>
                                    <Card.Header className={"d-flex justify-content-start"} style={{backgroundColor:"transparent",border:"none"}}>
                                        <img src={edit} width={60} height={60} alt={"bearbeiten"}/>
                                    </Card.Header>
                                </Card>
                            </Container>,
                        action: () => this.toggle(true, index)
                    }}>
                    <SupplierCatListView index={index} showModal={this.state.showModal} item={item}/>
                </SwipeableListItem>
            ));
        return catArray
    };
    render() {

        return (
            <SupplierLayout title="Catalog" location="catalog" description={"Mein Produktkatalog"}>
                <Container fluid>
                    <SwipeableList>
                        {this.getCatArray()}
                    </SwipeableList>

                    <React.Fragment key={"bottom"}>
                        <SwipeableDrawer style={{backgroundColor: "transparent"}}
                                         anchor={"bottom"}
                                         open={this.state.anchor}
                                         onClose={this.toggleDrawer(false)}
                                         onOpen={this.toggleDrawer(true)}
                        >
                            {this.list("bottom")}
                        </SwipeableDrawer>
                    </React.Fragment>


                </Container>
                <footer className="fixed-bottom fab">
                    <Container>
                        <Fab onClick={() => this.toggle(true, -1)}> <AddIcon></AddIcon> </Fab>

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
