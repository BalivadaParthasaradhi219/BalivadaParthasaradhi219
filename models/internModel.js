const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId
// { name: {mandatory}, email: {mandatory, valid email, unique},
//  mobile: {mandatory, valid mobile number, unique},
//  collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}
const InternSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type : string,
        required: true,
        unique: true,
    },
    mobile:{
        type: Number,
        required:  true ,
        unique: true      
    },

    college_Id: {
        type: ObjectId,
        required: true,
        ref: "College"
    },
    isDeleted : {
        type: Boolean,
        default: false
    },
    tag: [{type :String,}],

    category: {
        type: String,
        required: true,
    },
    subcategory: [String],

    isDeleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: {
        type: String,
        default: null
    },

}, { timestamps: true });


module.exports = mongoose.model("Intern", InternSchema)