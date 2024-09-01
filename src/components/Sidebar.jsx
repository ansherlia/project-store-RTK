import { FaListUl } from "react-icons/fa";
import { createObjectQuery } from "../helper/helper";
import styles from "./Sidebar.module.css";
import { categories } from "../constants/list";
function Sidebar({ query, setQuery }) {
	const categoryHandler = (event) => {
		const tagName = event.target.tagName;
		const category = event.target.innerText.toLowerCase();
		if (tagName !== "LI") return;
		setQuery((query) => createObjectQuery(query, { category }));
	};
	return (
		<div onClick={categoryHandler} className={styles.sidebar}>
			<div>
				<FaListUl />
				<p>Categories</p>
			</div>
			<ul>
				{categories.map((item) => (
					<li
						key={item.id}
						className={
							item.type.toLowerCase() === query.category
								? styles.selected
								: null
						}>
						{item.type}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Sidebar;
