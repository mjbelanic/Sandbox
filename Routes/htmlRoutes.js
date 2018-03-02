const express = require("express");
const path = require("path");

module.exports = function(app) {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/main.html"));
	});
};