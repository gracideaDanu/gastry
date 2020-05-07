const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
// Convert empty fields to an empty string so we can use validator functions
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    data.restaurant = !isEmpty(data.restaurant) ? data.restaurant : "";
    data.street = !isEmpty(data.street) ? data.street : "";
    data.city = !isEmpty(data.city) ? data.city : "";
    data.state = !isEmpty(data.state) ? data.state : "";
    data.code = !isEmpty(data.code) ? data.code : "";




// Name checks
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First name field is required";
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last name field is required";
    }
// Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //Restaurant and Address checks
    if (Validator.isEmpty(data.restaurant)) {
        errors.restaurant = "Restaurant field is required";
    }

    if (Validator.isEmpty(data.street)) {
        errors.street = "Address field is required";
    }

    if (Validator.isEmpty(data.city)) {
        errors.city = "Address field is required";
    }

    if (Validator.isEmpty(data.state)) {
        errors.state = "Address field is required";
    }

    if (Validator.isEmpty(data.code)) {
        errors.code = "Address field is required";
    }

// Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (!Validator.matches(data.password, /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/)){
        errors.password = "Password does at least need to contain one letter and one number and 6 characters!"
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
