import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import ModelSelect from "../components/ModelSelect";
import utilStyles from "../styles/utils.module.css";

const name = "NLP Playground";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <img
        src="/images/bender.png"
        className={`${utilStyles.headerHomeImage} ${utilStyles.borderCircle}`}
        alt={name}
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
      <ModelSelect />
    </Layout>
  );
}
