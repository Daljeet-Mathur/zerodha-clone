const { model } = require("mongoose")

const mongoose = require('mongoose');

const { HoldingSchema } = require("../Schema/HoldingSchema")

const Holdingmodel = mongoose.model('Holding', HoldingSchema);

module.exports =  Holdingmodel 