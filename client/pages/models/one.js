import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";

const name = "NLP Playground";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Model #1</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Model #1</h1>
    </Layout>
  );
}
