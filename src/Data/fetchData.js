import axios from "axios";

export const fetchData = () => async (args) => {
	try {
		args({ type: "DATA_REQUEST" });

		const { data } = await axios.get(
			"https://api.quicksell.co/v1/internal/frontend-assignment/"
		);

		args({ type: "DATA_SUCCESS", payload: data });
	} catch (error) {
		args({ type: "DATA_FAILURE" });
	}
};

export const selectData = (group, allTickets, orderValue) => async (args) => {
	try {
		args({ type: "SELECT_DATA_REQUEST" });

		let user = false;
		let mySet = new Set();
		let arr = [],
			showData = [];

		if (group === "status") {
			allTickets.forEach((e) => {
				mySet.add(e.status);
			});

			arr = [...mySet];

			arr.forEach((e, idx) => {
				let arr = allTickets.filter((i) => {
					return e === i.status;
				});
				showData.push({
					[idx]: {
						title: e,
						value: arr,
					},
				});
			});
		} else if (group === "user") {
			user = true;
			allTickets?.allUser?.forEach((e, idx) => {
				arr = allTickets?.allTickets?.filter((Fe) => {
					return e.id === Fe.userId;
				});

				showData.push({
					[idx]: {
						title: e.name,
						value: arr,
					},
				});
			});
		} else {
			let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

			prior_list.forEach((e, idx) => {
				arr = allTickets.filter((i) => {
					return idx === i.priority;
				});

				showData.push({
					[idx]: {
						title: e,
						value: arr,
					},
				});
			});
		}

		if (orderValue === "title") {
			showData.forEach((e, idx) => {
				e[idx]?.value?.sort((a, b) => a.title.localeCompare(b.title));
			});
		}

		if (orderValue === "priority") {
			showData.forEach((e, idx) => {
				e[idx]?.value?.sort((a, b) => b.priority - a.priority);
			});
		}

		args({
			type: "SELECT_DATA_SUCCESS",
			payload: { showData, user },
		});
	} catch (error) {
		args({ type: "SELECT_DATA_FAILURE", payload: error.message });
	}
};
