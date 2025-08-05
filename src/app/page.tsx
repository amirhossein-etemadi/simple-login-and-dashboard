import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles["main-container"]}>
      <h1 className={styles["title"]}>welcome!</h1>

      <a href="/auth" className={styles["link"]}>
        /auth
      </a>

      <a href="/dashboard" className={styles["link"]}>
        /dashboard
      </a>
    </div>
  );
}
