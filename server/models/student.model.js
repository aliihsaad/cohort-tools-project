import {model, Schema} from "mongoose";

const studentSchema = new Schema({

firstName: { type: String, required: true },
lastName: { type: String, required: true },
email: { type: String, required: true },
phone: { type: String, required: true },
linkedinUrl: { type: String, required: true },
languages: { type: Array, required: true },
program: { type: String, required: true },
background: { type: String, required: true },
image: { type: String, required: true, default: "https://i.imgur.com/r8bo8u7.png" },
cohort: { type: Number, required: true },
projects: { type: Array, required: true }

})

export default model("Student", studentSchema)