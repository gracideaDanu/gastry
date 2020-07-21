import React from "react";

import Input from "../auth/Input";
import Button from "../button/Button";
import "./UserInfo.css";

const UserInfoForm = (props) => {
    const { onChange, onChangeAddress, onSubmit, form } = props;
    return (
        <form className="user-info-container" onSubmit={onSubmit}>
            <ul className="list">
                <li className="item">
                    Firma:
                    <input
                        type="text"
                        name="company"
                        onChange={onChange}
                        value={form.company}
                        autoFocus
                    ></input>
                </li>
                <li className="item">
                    Straße:
                    <input
                        type="text"
                        name="street"
                        onChange={onChangeAddress}
                        value={form.address.street}
                    ></input>
                </li>
                <li className="item">
                    Stadt:
                    <input
                        type="text"
                        name="city"
                        onChange={onChangeAddress}
                        value={form.address.city}
                    ></input>
                </li>
                <li className="item">
                    Bundesland:
                    <input
                        type="text"
                        name="state"
                        onChange={onChangeAddress}
                        value={form.address.state}
                    ></input>
                </li>
                <li className="item">
                    PLZ:
                    <input
                        type="text"
                        name="code"
                        onChange={onChangeAddress}
                        value={form.address.code}
                    ></input>
                </li>
                {form.category ? (
                    <li className="item">
                        <label className="form-category-label">
                            <select
                                className="select-category"
                                defaultValue={form.category}
                                onChange={(e) => props.onChangeOffer(e)}
                            >
                                <option value="0" disabled>Produktangebot</option>
                                <option value="food">Lebensmittel</option>
                                <option value="drinks">Getränke</option>
                                <option value="both">Beides</option>
                                <option></option>
                            </select>
                        </label>
                    </li>
                ) : null}
            </ul>
            <Button className="button submit-btn" type="submit" label="Speichern" />
        </form>
    );
};

export default UserInfoForm;
