/*jshint esversion: 6*/

const express = require ('express');
const userController = require("../controllers/user-controller.js");

const api = express.Router();

api.get("/probando-controlador",userController.prueba);


module.exports = api;
