const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const studentSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

studentSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Student", studentSchema);
