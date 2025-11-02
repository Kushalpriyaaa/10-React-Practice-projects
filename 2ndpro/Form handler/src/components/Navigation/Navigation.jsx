import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logo}>
        <img src="/images/no.png" alt="no coding" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
