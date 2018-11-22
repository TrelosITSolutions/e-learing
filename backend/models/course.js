const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const courseSchema = mongoose.Schema({
    name:{ type: String, required: true, unique: true },
    content: { type: String, required: true},
    imagePath: { type: String, required: true }
});

courseSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Course", courseSchema);
