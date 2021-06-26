import styles from "../styles/chatwoot.module.css";
import Script from "next/script";

function HomePage() {
  return (
    <div className={styles.mainBody}>
      <h1 className={styles.heading}>Chatwoot Integration by nerdjfpb</h1>
      <p className={styles.helperText}>Click in chat icon to contact with us</p>

      <Script src="/chatwoot.js" />
    </div>
  );
}

export default HomePage;
