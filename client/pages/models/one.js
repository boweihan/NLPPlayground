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
      <div className={utilStyles.card}>
        <h2 className={utilStyles.headingMd}>Boolean Response</h2>
        <p>
          Do you have reliable transportation? Please respond with "Yes" or
          "No".
        </p>
        <input className={utilStyles.input} />
      </div>
      <div className={utilStyles.card}>
        <h2 className={utilStyles.headingMd}>Multiple Choice</h2>
        <p>
          What make of car are you currently driving? A - Toyota, B - Mazda, C -
          Lexus, D - Other
        </p>
        <input className={utilStyles.input} />
      </div>
      <div className={utilStyles.card}>
        <h2 className={utilStyles.headingMd}>Rating Scale</h2>
        <p>One a scale of 1-10, how happy are you right now?</p>
        <input className={utilStyles.input} />
      </div>
      <div className={utilStyles.card}>
        <h2 className={utilStyles.headingMd}>Name Identification</h2>
        <p>What is your full name?</p>
        <input className={utilStyles.input} />
      </div>
      <div className={utilStyles.card}>
        <h2 className={utilStyles.headingMd}>Numerical Identification</h2>
        <p>What is your current salary?</p>
        <input className={utilStyles.input} />
      </div>
    </Layout>
  );
}
