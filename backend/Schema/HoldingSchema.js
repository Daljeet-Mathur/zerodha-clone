const { Schema } = require("mongoose"); 

// or second method
// import mongoose from 'mongoose';
// const { Schema } = mongoose;
// 



const HoldingSchema = new Schema({
   name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = { HoldingSchema };