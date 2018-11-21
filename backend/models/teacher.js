const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const teacherSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

teacherSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Teacher", teacherSchema);
