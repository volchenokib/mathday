const argumentsConverter = (arg) => {
	if (arg.anonymous_id) {
		arg.anonymousId = arg.anonymous_id;
		delete arg.anonymous_id;
	}
	if (arg.user_id) {
		arg.userId = arg.user_id;
		delete arg.user_id;
	}
	return arg;
};

module.exports = argumentsConverter;
