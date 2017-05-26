/*jshint esversion: 6*/

var express = require("express");
var artistController = require("../controllers/artist-controller.js");
var api = express.Router();

api.get("artist");

module.exports= api;
