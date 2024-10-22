import React from "react";
import "./style.css";

const Card = ({ id, title, tag, status }) => {
	return (
		<div className="cardContainer">
			<div className="card-title">
				<span style={{ textTransform: "uppercase" }}>{id}</span>
				<div className="image-Container">
					<img
						src="https://imgs.search.brave.com/X7XPq0yunGvlrkH7gP12GzAcbLpgJ9-xhHWwA9RtyRQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzMzLzU0Lzc4/LzM2MF9GXzYzMzU0/Nzg0Ml9BdWdZemV4/VHBNSjl6MVljcFRL/VUJvcUJGMENVQ2sx/MC5qcGc"
						alt="UserImage"
					/>
				</div>
			</div>
			<div className="card-name">
				<p>{title}</p>
			</div>
			<div className="card-tags">
				<div className="tags"> ... </div>
				{tag?.map((elem, index) => {
					return (
						<div key={index} className="tags-bottom">
							<span>•</span> {elem}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
