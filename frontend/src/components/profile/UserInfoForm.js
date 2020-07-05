import React from "react";

import "./UserInfo.css";

const UserInfoForm = (props) => {
    const { onChange, onChangeAddress, onSubmit, form } = props;
    return (
        <form className="user-info-container" onSubmit={onSubmit}>
            <ul className="list">
                <li className="item">
                    Company:
                    <input
                        type="text"
                        name="company"
                        onChange={onChange}
                        value={form.company}
                        autoFocus
                    ></input>
                </li>
                <li className="item">
                    Street:
                    <input
                        type="text"
                        name="street"
                        onChange={onChangeAddress}
                        value={form.address.street}
                    ></input>
                </li>
                <li className="item">
                    City:
                    <input
                        type="text"
                        name="city"
                        onChange={onChangeAddress}
                        value={form.address.city}
                    ></input>
                </li>
                <li className="item">
                    State:
                    <input
                        type="text"
                        name="state"
                        onChange={onChangeAddress}
                        value={form.address.state}
                    ></input>
                </li>
                <li className="item">
                    Postcode:
                    <input
                        type="text"
                        name="code"
                        onChange={onChangeAddress}
                        value={form.address.code}
                    ></input>
                </li>
                {form.category ? (
                    <li className="item">
                        Tag:
                        <select
                            className="select-category"
                            defaultValue={form.category}
                            onChange={(e) => props.onChangeOffer(e)}
                        >
                            <option value="food">Food</option>
                            <option value="drinks">Drinks</option>
                            <option value="both">Both</option>
                            <option></option>
                        </select>
                    </li>
                ) : null}
            </ul>
            <button className="button" type="submit">
                Save
            </button>
        </form>
    );
};

export default UserInfoForm;
