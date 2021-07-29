const https = require("https");
const _ = require("lodash");

exports.handler = (event, context, callback) => {
	// TODO: add arg validation
	const isValid = true;

	let body = "";
	let jsonObject = JSON.stringify(event);

	// the request options
	const options = {
		host: "api.segment.io",
		path: "/v1/track",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Basic SjgzNTNYQ2dHaE1KbGFqQ04zcGJYcnU1NlNWWjEyUWE6"
		}
	};

	if (isValid) {
		const req = https.request(options, (res) => {
			console.log("statusCode: ", res.statusCode);
			res.on("data", (event) => {
				body += event;
			});
			res.on("end", () => {
				if (res.headers["content-type"] === "application/json") {
					body = JSON.parse(body);
				}
				callback(null, body);
			});
			res.on("error", callback);
		});
		req.write(jsonObject);
		req.end();
	} else {
		throw new Error("event not valid");
	}

	const response = {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST"
		},
		body: "SST works"
	};
	callback(null, response);
};
