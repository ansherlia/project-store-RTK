import { ImSearch } from "react-icons/im";
import { createObjectQuery } from "../helper/helper";
import styles from "./SearchBox.module.css";
function SearchBox({ setQuery, setSearch, search }) {
	const searchHandler = () => {
		setQuery((query) => createObjectQuery(query, { search }));
	};
	return (
		<div className={styles.search}>
			<input
				type="text"
				placeholder="Search..."
				value={search}
				onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
			/>
			<button onClick={searchHandler}>
				<ImSearch />
			</button>
		</div>
	);
}

export default SearchBox;
