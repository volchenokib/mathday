import { handler as lambda } from "../index.js";
import converting from "../utils/arguments_converter";
import track from "./events/track.json";
import page from "./events/page.json";
import identify from "./events/identify.json";

const callback = jest.fn();
const context = {};
let response = {
	headers: {
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "POST"
	},
	body: "event processed successfully",
	statusCode: 200
};

import Analytics, { mockClear } from "analytics-node";
jest.mock("analytics-node");
const mockAnalytics = Analytics;
jest.resetAllMocks();

beforeEach(() => {
	mockClear();
});

describe("Server Side Tracker", () => {
	it("the 'Track' event is processed correctly", () => {
		let event = {};
		event.body = track;

		lambda(event, context, callback);

		expect(callback).toHaveBeenCalledWith(null, response);
	});

	it("the 'Page' event is processed correctly", () => {
		let event = {};
		event.body = page;

		lambda(event, context, callback);

		expect(callback).toHaveBeenCalledWith(null, response);
	});

	it("the 'Identify' event is processed correctly", () => {
		let event = {};
		event.body = identify;

		lambda(event, context, callback);

		expect(callback).toHaveBeenCalledWith(null, response);
	});

	it("anonymous_id is converted to anonymousId", () => {
		let event = {};
		event.body = track;

		expect(converting(event.body.arguments)).toHaveProperty("anonymousId");
	});

	it("user_id is converted to userId", () => {
		let event = {};
		event.body = identify;

		expect(converting(event.body.arguments)).toHaveProperty("userId");
	});

	it("event properties are not converted to camelCase on a Track call", () => {
		let event = {};
		event.body = track;

		converting(event.body.arguments);

		expect(event.body.arguments.properties.bar_baz).toBeTruthy();
	});

	it("event properties are not converted to camelCase on a Identify call", () => {
		let event = {};
		event.body = identify;

		converting(event.body.arguments);

		expect(event.body.arguments.traits.bar_baz).toBeTruthy();
	});
});

describe("Correct analytics method is called for each valid event type", () => {
	it("Track method", () => {
		let event = {};
		event.body = track;

		lambda(event, context, callback);

		expect(mockAnalytics.mock.instances[0].track).toHaveBeenCalled();
		expect(mockAnalytics.mock.instances[0].track).toHaveBeenCalledTimes(1);
		expect(mockAnalytics.mock.instances[0].page).not.toHaveBeenCalled();
	});

	it("Page method", () => {
		let event = {};
		event.body = page;

		lambda(event, context, callback);

		expect(mockAnalytics.mock.instances[0].page).toHaveBeenCalled();
		expect(mockAnalytics.mock.instances[0].page).toHaveBeenCalledTimes(1);
		expect(mockAnalytics.mock.instances[0].identify).not.toHaveBeenCalled();
	});

	it("Identify method", () => {
		let event = {};
		event.body = identify;

		lambda(event, context, callback);

		expect(mockAnalytics.mock.instances[0].identify).toHaveBeenCalled();
		expect(mockAnalytics.mock.instances[0].identify).toHaveBeenCalledTimes(1);
		expect(mockAnalytics.mock.instances[0].track).not.toHaveBeenCalled();
	});
});
