import Link from "next/Link";
import styles from "../styles/home.module.css";
import Head from "next/head";
function profilePage() {
  return (
    <>
      <Head>
        <title>hashira List | Home</title>
        <meta name="keyword" content="hashira" />
      </Head>
      <div className="main">
        <h1 className={styles.titel}>Hello World</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <Link href="/hashiras">
          <a className={styles.btn}>see hashiras List</a>
        </Link>
      </div>
    </>
  );
}

export default profilePage;
