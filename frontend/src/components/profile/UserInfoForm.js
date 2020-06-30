import React from "react";

const UserInfoForm = (props) => {
    const { onChange, onChangeAddress, onSubmit, form } = props
    return (
        <div className="card mb-5">
            <h3 className="card-header">Update</h3>
            <form onSubmit={onSubmit}>
                <ul className="list-group">
                    <li className="list-group-item">
                    Company:
                        <input
                            type="text"
                            name="company"
                            onChange={onChange}
                            value={form.company}
                        ></input>
                    </li>
                    <li className="list-group-item">
                        Street:
                        <input
                            type="text"
                            name="street"
                            onChange={onChangeAddress}
                            value={form.address.street}
                        ></input>
                    </li>
                    <li className="list-group-item">
                        City:
                        <input
                            type="text"
                            name="city"
                            onChange={onChangeAddress}
                            value={form.address.city}
                        ></input>
                    </li>
                    <li className="list-group-item">
                        State:
                        <input
                            type="text"
                            name="state"
                            onChange={onChangeAddress}
                            value={form.address.state}
                        ></input>
                    </li>
                    <li className="list-group-item">
                        Postcode:
                        <input
                            type="text"
                            name="code"
                            onChange={onChangeAddress}
                            value={form.address.code}
                        ></input>
                    </li>
                    { form.tag
                        ?  <li className="list-group-item">
                            Tag
                            <select defaultValue={form.tag} onChange={(e) =>props.onChangeOffer(e)}>
                                <option value="Food"> Food</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Both">Both</option>
                                <option></option>
                            </select>
                        </li>
                      : null

                    }

                </ul>
                <button type="submit">Save</button>
            </form>
        </div>
    )
};

export default UserInfoForm;
