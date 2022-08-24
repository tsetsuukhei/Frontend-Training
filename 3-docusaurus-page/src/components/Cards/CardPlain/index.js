import React from "react";
import styles from "./CardPlain.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Icon from "../../Icon";

export default function CardPlain({ title, description, to, className, icon }) {
	const classes = [styles["card-border"]];

	if (className) {
		classes.push(className);
	}

	return (
		<Link to={to} className={styles.link}>
			<div className={clsx(classes.join(" "))}>
				<div className={styles["card-container"]}>
					<div>
						<div className={styles["card-header"]}>
							{icon ? (
								<Icon name={icon} className={styles.icon} />
							) : (
								<Icon name='check-circle' style={{ width: 26, height: 26 }} />
							)}

							<h5>{title}</h5>
						</div>
						<p>{description}</p>
					</div>

					<div className={styles["card-bottom"]}>
						<p>Цааш үзэх</p>
						<Icon name='arrow-right' style={{ width: 16, height: 16 }} />
					</div>
				</div>
			</div>
		</Link>
	);
}
