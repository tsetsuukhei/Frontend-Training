import React from "react";
import styles from "./CardImg.module.css";
import clsx from "clsx";
import Icon from "../../Icon";

export default function CardImg({ title, description, className, src }) {
	const classes = [styles["card-border"]];

	if (className) {
		classes.push(className);
	}
	return (
		<div className={clsx(classes.join(" "))}>
			<div className={styles["img-border"]}></div>
			<div className={styles["card-contents"]}>
				<h4 className={styles["title"]}>{title}</h4>
				<p className={styles["description"]}>{description}</p>
			</div>
		</div>
	);
}
