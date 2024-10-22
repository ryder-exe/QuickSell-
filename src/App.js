import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { fetchData } from "./Data/fetchData";
import Dashboard from "./components/DashBoard/Dashboard";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<Dashboard />
		</>
	);
};

export default App;
