import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";

export default function ModelOne() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Model #1</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Model #1</h1>
      <h2 className={utilStyles.headingMd}>Boolean Response</h2>
      <h2 className={utilStyles.headingMd}>Multiple Choice</h2>
      <h2 className={utilStyles.headingMd}>Rating Scale</h2>
      <h2 className={utilStyles.headingMd}>Name Identification</h2>
      <h2 className={utilStyles.headingMd}>Numerical Identification</h2>
    </Layout>
  );
}
