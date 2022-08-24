import React from "react";
import styles from "./Icon.module.css";

export default function Icon({ name, className, style, color }) {
	const Icon =
		require(`!@svgr/webpack!../../../static/icons/${name}.svg`).default;
	const COLORS = ["black", "orange"];
	const colors = COLORS.includes(color) ? styles[color] : styles.orange;
	let classes = [styles.icon];
	if (className) {
		classes.push(className);
	}
	return (
		<div className={classes.join(" ")} style={style}>
			<Icon name={name} className={colors} />
		</div>
	);
}
