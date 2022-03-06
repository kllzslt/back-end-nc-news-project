const { readFile } = require("fs/promises");

exports.getEndpointsApi = (req, res, next) => {
	readFile("./endpoints.json").then((body) => {
		const endpoints = JSON.parse(body);
		res.status(200).send({ endpoints });
	});
};

exports.getEndpointsHome = (_, res, next) => {
	res.status(200).send({
		"GET /": {
			description:
				"HEROKU start",
		},
	});
};