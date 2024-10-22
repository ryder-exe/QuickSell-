import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../../Data/fetchData";
import { ReactComponent as Display } from "../../icons_FEtask/Display.svg";
import { ReactComponent as Down } from "../../icons_FEtask/down.svg";

const getLocalStorageItem = (key, defaultValue) =>
	localStorage.getItem(key) || defaultValue;

export default function Navbar() {
	const dispatch = useDispatch();
	const { allTickets, allUser } = useSelector((state) => state.DataReducer);
	const [showClick, setShowClick] = useState(false);
	const [groupData, setGroupData] = useState(
		getLocalStorageItem("group", "status")
	);
	const [orderData, setOrderData] = useState(
		getLocalStorageItem("order", "priority")
	);

	const handleSelectionChange = (e, isGroup) => {
		const value = e.target.value;
		if (isGroup) {
			localStorage.setItem("group", value);
			setGroupData(value);
		} else {
			localStorage.setItem("order", value);
			setOrderData(value);
		}
		setShowClick(false);
	};

	useEffect(() => {
		const data =
			groupData === "user" ? { allTickets, allUser } : allTickets;
		dispatch(selectData(groupData, data, orderData));
	}, [allTickets, allUser, groupData, orderData, dispatch]);

	return (
		<div className="top-container">
			<button
				className="button-menu"
				onClick={() => setShowClick(!showClick)}
			>
				<Display style={{ marginLeft: "8%" }} />
				Display
				<Down style={{ marginRight: "12%" }} />
			</button>
			{showClick && (
				<div className="drop-menu">
					<div className="select-data">
						<span>Grouping</span>
						<select
							value={groupData}
							onChange={(e) => handleSelectionChange(e, true)}
							className="select-style"
						>
							<option value="status">Status</option>
							<option value="user">User</option>
							<option value="priority">Priority</option>
						</select>
					</div>
					<div className="select-data">
						<span>Ordering</span>
						<select
							value={orderData}
							onChange={(e) => handleSelectionChange(e, false)}
							className="select-style"
						>
							<option value="priority">Priority</option>
							<option value="title">Title</option>
						</select>
					</div>
				</div>
			)}
		</div>
	);
}
