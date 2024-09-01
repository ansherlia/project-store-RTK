import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";
function Loader() {
	return (
		<div className={styles.loader}>
			<RotatingLines
				strokeColor="#fe5d42"
				strokeWidth="3"
				width="100px"
				height="100px"
			/>
		</div>
	);
}

export default Loader;
