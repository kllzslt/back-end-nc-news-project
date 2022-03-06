exports.getEndpoints = (_, res, next) => {
	res.status(200).send({
		"GET /": {
			description:
				"Responds with a JSON object detailing the available endpoints",
		},
	});
};