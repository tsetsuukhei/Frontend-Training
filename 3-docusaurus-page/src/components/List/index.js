import React from "react";
import styles from "./List.module.css";
import Icon from "../Icon";
import Link from "@docusaurus/Link";

export default function List({ key, title, to, icon }) {
  return (
    <Link to={to} className={styles.link}>
      <div className={styles["list-border"]}>
        <div className={styles["list-container"]}>
          <div className={styles["list-item"]}>
            {icon ? (
              <Icon name={icon} className={styles.icon} />
            ) : (
              <Icon name="check-circle" style={{ width: 6, height: 6 }} />
            )}
            <h5 className={styles["title"]}>{title}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}
