import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { ReactComponent as Add } from "../../icons_FEtask/add.svg";
import { ReactComponent as Threedot } from "../../icons_FEtask/3 dot menu.svg";
import { ReactComponent as HighPrio } from "../../icons_FEtask/Img - High Priority.svg";
import { ReactComponent as LowPrio } from "../../icons_FEtask/Img - Low Priority.svg";
import { ReactComponent as MediumPrio } from "../../icons_FEtask/Img - Medium Priority.svg";
import { ReactComponent as Noprio } from "../../icons_FEtask/No-priority.svg";
import { ReactComponent as Urgent } from "../../icons_FEtask/SVG - Urgent Priority colour.svg";
import Card from "../Card/Card";

export default function Dashboard() {
	const { showData, user } = useSelector((state) => state.SelectDataReducer);

	const priorityIcons = {
		"No priority": <Noprio className="icon" />,
		Low: <LowPrio className="icon" />,
		Medium: <MediumPrio className="icon" />,
		High: <HighPrio className="icon" />,
		Urgent: <Urgent className="icon" />,
	};

	return (
		showData && (
			<div className="dashboard-Container">
				{showData.map((e, idx) => {
					return (
						<div key={idx} className="column-menu">
							<div className="column-menu-Heading">
								<div className="l-box">
									{user && (
										<div className="image-Container">
											<img
												style={{
													width: "100%",
													height: "100%",
													borderRadius: "50%",
												}}
												src="https://imgs.search.brave.com/X7XPq0yunGvlrkH7gP12GzAcbLpgJ9-xhHWwA9RtyRQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzMzLzU0Lzc4/LzM2MF9GXzYzMzU0/Nzg0Ml9BdWdZemV4/VHBNSjl6MVljcFRL/VUJvcUJGMENVQ2sx/MC5qcGc"
												alt="UserImage"
											/>
										</div>
									)}
									<span>
										{priorityIcons[e[idx]?.title] || null}
										{e[idx]?.title} {e[idx]?.value?.length}
									</span>
								</div>
								<div className="r-box">
									<span>
										<Add
											style={{
												width: "20px",
												height: "20px",
											}}
										/>
									</span>
									<span>
										<Threedot />
									</span>
								</div>
							</div>
							<div className="card-list">
								{e[idx]?.value?.map((e, ind) => {
									return (
										<Card
											id={e.id}
											title={e.title}
											tag={e.tag}
										/>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		)
	);
}
