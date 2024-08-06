import axios from "axios";

export const apiRequest = axios.create({
<<<<<<< HEAD
	// baseURL: "http://localhost:3500",
=======
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
	baseURL: "https://grearnapi.vercel.app",
	withCredentials: true,
});

export const User = async (isMounted, data, controller, auth, req) => {
	try {
		if (req === "get") {
			const response = await apiRequest.get("/users", {
				signal: controller.signal,
			});

			const matchingUser = response.data.find((user) => user._id === auth.id);
			if (matchingUser) isMounted && data([matchingUser]);
		}
		if (req === "patch") {
			const response = await apiRequest.patch("/users", {
				signal: controller.signal,
				data,
			});
			return response;
		}
		if (req === "post") {
			const response = await apiRequest.post("/users", {
				signal: controller.signal,
				data,
			});
			return response;
		}
		if (req === "delete") {
			const response = await apiRequest.delete("/users", {
				signal: controller.signal,
				data,
			});
			return response;
		}
	} catch (err) {
		console.error(err);
	}
};

<<<<<<< HEAD
=======
export const Transaction = async (isMounted, data, controller, auth, req) => {
	try {
		if (req === "get") {
			const response = await apiRequest.get("/transaction", {
				signal: controller.signal,
			});

			const matchingUsers = response.data.filter((user) => user.user === auth.id);
			if (matchingUsers.length > 0) {
				isMounted && data(matchingUsers);
			}
		}

		if (req === "patch") {
			const response = await apiRequest.patch("/transaction", {
				signal: controller.signal,
				data,
			});
			return response;
		}

		if (req === "post") {
			const response = await apiRequest.post("/transaction", {
				signal: controller.signal,
				data,
			});
			return response;
		}

		if (req === "delete") {
			const response = await apiRequest.delete("/transaction", {
				signal: controller.signal,
				data,
			});
			return response;
		}
	} catch (err) {
		console.error(err);
	}
};

>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
export const Notification = async (isMounted, data, controller, auth, req) => {
	try {
		if (req === "get") {
			const response = await apiRequest.get("/notification", {
				signal: controller.signal,
			});

			const matchingUser = response.data.find((user) => user._id === auth.id);
			if (matchingUser) isMounted && data([matchingUser]);
		}
		if (req === "patch") {
			const response = await apiRequest.patch("/notification", {
				signal: controller.signal,
				data,
			});
			return response;
		}
		if (req === "post") {
			const response = await apiRequest.post("/notification", {
				signal: controller.signal,
				data,
			});
			console.log(data);
			return response;
		}
		if (req === "delete") {
			const response = await apiRequest.delete("/notification", {
				signal: controller.signal,
				data,
			});
			return response;
		}
	} catch (err) {
		console.error(err);
	}
};

<<<<<<< HEAD
export const Flutterwave = async (isMounted, data, controller, auth, req) => {
	try {
		if (req === "get") {
			const response = await apiRequest.get("/deposit/flutterwave", {
				signal: controller.signal,
			});

			const matchingUser = response.data.find((user) => user._id === auth.id);
			if (matchingUser) isMounted && data([matchingUser]);
		}
		if (req === "patch") {
			const response = await apiRequest.patch("/deposit/flutterwave", {
=======
export const Deposit = async (data, controller, req) => {
	try {
		if (req === "patch") {
			const response = await apiRequest.patch("/fund/deposit", {
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
				signal: controller.signal,
				data,
			});
			return response;
		}
		if (req === "post") {
<<<<<<< HEAD
			const response = await apiRequest.post("/deposit/flutterwave", {
				signal: controller.signal,
				data,
			});
			return response;
		}
		if (req === "delete") {
			const response = await apiRequest.delete("/deposit/flutterwave", {
=======
			const response = await apiRequest.post("/fund/deposit", {
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
				signal: controller.signal,
				data,
			});
			return response;
		}
	} catch (err) {
		console.error(err);
	}
};

<<<<<<< HEAD
// Make Users Requests to the API
export const getAllUsers = async (isMounted, data, controller) => {
=======
export const Withdraw = async (data, controller, req) => {
	try {
		if (req === "get") {
			const response = await apiRequest.get("/fund/banks", {
				signal: controller.signal,
			});
			return response.data;
		}
		if (req === "post") {
			const response = await apiRequest.post("/fund/withdraw", {
				signal: controller.signal,
				data,
			});
			return response;
		}
	} catch (err) {
		console.error(err);
	}
};

export const Investment = async (data, controller, req) => {
	try {
		if (req === "get") {
			const response = await apiRequest.get("/investment", {
				signal: controller.signal,
			});
			return response;
		}
		if (req === "post") {
			const response = await apiRequest.post("/investment", {
				signal: controller.signal,
				data,
			});
			return response;
		}
		if (req === "patch") {
			const response = await apiRequest.patch("/investment", {
				signal: controller.signal,
				data,
			});
			return response;
		}
		if (req === "delete") {
			const response = await apiRequest.delete("/investment", {
				signal: controller.signal,
				data,
			});
			return response;
		}
	} catch (err) {
		console.error(err);
	}
};

export const AdminUsersCall = async (data, controller) => {
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
	try {
		const response = await apiRequest.get("/users", {
			signal: controller.signal,
		});
<<<<<<< HEAD
		isMounted && data(response.data);
=======
		data(response.data);
	} catch (err) {
		console.error(err);
	}
};
export const AdminTransactionCall = async (data, controller) => {
	try {
		const response = await apiRequest.get("/transaction", {
			signal: controller.signal,
		});
		data(response.data);
	} catch (err) {
		console.error(err);
	}
};
export const AdminInvestmentCall = async (data, controller) => {
	try {
		const response = await apiRequest.get("/investment", {
			signal: controller.signal,
		});
		data(response.data);
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
	} catch (err) {
		console.error(err);
	}
};

export const generateRandomCode = async () => {
	const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numbers = "0123456789";
	let first = "grearn-";
	let second = "";
	let third = "";

	for (let i = 0; i < 6; i++) second += letters.charAt(Math.floor(Math.random() * letters.length));
	for (let i = 0; i < 8; i++) third += numbers.charAt(Math.floor(Math.random() * numbers.length));

	return first + second + "-" + third;
};
