import React from "react";
import styles from "./Section.module.css";
import clsx from "clsx";

export function Section({
	title /* Adds title to the section */,
	subtitle /* Adds subtitle to the section, not required */,
	description /* Adds description to the section */,
	imgLeft = false /* Changes the position of the image. */,
	children /* Adds extra content */,
	src /* Img source */,
	alt = "alt",
	className,
	style,
}) {
	let classes = [];
	if (className) {
		classes.push(className);
	}

	return (
		<section style={style} className={clsx(classes)}>
			<div
				className={clsx(
					"container",
					styles.container,
					imgLeft === true && styles["row-reverse"]
				)}>
				<div className={clsx([src && styles["content-container"]])}>
					<div className={styles["text-wrapper"]}>
						{subtitle && <p className={styles["subtitle"]}>{subtitle}</p>}
						<h2>{title}</h2>
						<p className={styles["description"]}>{description}</p>
					</div>

					<div className={styles["center"]}>{children}</div>
				</div>
				<div className={clsx([src && styles["img-container"]])}>
					{src && <img src={src} className={styles["img"]} alt={alt} />}
					{!src && (
						<div
							className={styles.noImg}
							style={{
								background: "#ebedf0",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center center",
							}}
						/>
					)}
				</div>
			</div>
		</section>
	);
}
