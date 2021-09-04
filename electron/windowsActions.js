const verifyWindowAction = (action, w) => {
	if (action === "minimize") {
		w.minimize();
	} else if (action === "closeApp") {
		console.log(action);
		w.close();
	}
};

module.exports = {
	verifyWindowAction,
};
