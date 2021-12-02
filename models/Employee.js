const mongoose = require('mongoose');

let validateEmail = function (emailId) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(emailId)
};

const EmployeeSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: [true, "Id cannot be empty"]
    },
    firstName: {
        type: String,
        required: [true, "First name must be entered"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Last name must be entered"],
        trim: true,
    },
    emailId: {
        type: String,
        required: [true, "Email cannot be empty and must be in valid form"],
        trim: true,
        validate: [validateEmail, "Email must be in valid form (example@mail.com)"]
    },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;