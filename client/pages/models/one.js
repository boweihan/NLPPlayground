import { useState } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import axios from "axios";

const categories = {
  BOOLEAN: "boolean",
  MULTIPLE_CHOICE: "multiple",
  RATING: "rating",
  FULL_NAME: "name",
  NUMERIC: "numeric",
};

const fetchResponse = async (input, category) => {
  let response;
  try {
    response = await axios.get(`/bot/message/${category}?${input}`);
  } catch (e) {
    response = e.message;
  }
  return response;
};

const InlineResponse = ({ msg }) => {
  return msg && <p className={utilStyles.inlineResponse}>{msg}</p>;
};

export default function ModelOne() {
  const [booleanInput, setBooleanInput] = useState("");
  const [multipleChoiceInput, setMultipleChoiceInput] = useState("");
  const [ratingInput, setRatingInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [numericInput, setNumericInput] = useState("");

  const [booleanMsg, setBooleanMsg] = useState("");
  const [multipleChoiceMsg, setMultipleChoiceMsg] = useState("");
  const [ratingMsg, setRatingMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [numericMsg, setNumericMsg] = useState("");

  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Model 1</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Model 1</h1>
      <div className={utilStyles.card}>
        <h2 className={utilStyles.headingMd}>Booleans</h2>
        <p>
          Do you have reliable transportation? Please respond with "Yes" or
          "No".
        </p>
        <div className={utilStyles.inputGroup}>
          <input
            type="text"
            className={utilStyles.input}
            onChange={(evt) => setBooleanInput(evt.value)}
            value={booleanInput}
            onKeyPress={async (evt) => {
              if (evt.charCode === 13)
                setBooleanMsg(
                  await fetchResponse(booleanInput, categories.BOOLEAN)
                );
            }}
          />
          <button
            className={utilStyles.button}
            onClick={async () =>
              setBooleanMsg(
                await fetchResponse(booleanInput, categories.BOOLEAN)
              )
            }
          >
            Process
          </button>
        </div>
        <InlineResponse msg={booleanMsg} />
      </div>
      <div className={utilStyles.card}>
        <h2 className={utilStyles.headingMd}>Multiple Choice</h2>
        <p>
          What make of car are you currently driving? A - Toyota, B - Mazda, C -
          Lexus, D - Other
        </p>
        <div className={utilStyles.inputGroup}>
          <input
            className={utilStyles.input}
            onChange={(evt) => setMultipleChoiceInput(evt.value)}
            value={multipleChoiceInput}
            onKeyPress={async (evt) => {
              if (evt.charCode === 13)
                setMultipleChoiceMsg(
                  await fetchResponse(
                    multipleChoiceInput,
                    categories.MULTIPLE_CHOICE
                  )
                );
            }}
          />
          <button
            className={utilStyles.button}
            onClick={async () =>
              setMultipleChoiceMsg(
                await fetchResponse(
                  multipleChoiceInput,
                  categories.MULTIPLE_CHOICE
                )
              )
            }
          >
            Process
          </button>
        </div>
        <InlineResponse msg={multipleChoiceMsg} />
      </div>
      <div className={utilStyles.card}>
        <h2 className={utilStyles.headingMd}>Rating Scale</h2>
        <p>One a scale of 1-10, how happy are you right now?</p>
        <div className={utilStyles.inputGroup}>
          <input
            className={utilStyles.input}
            onChange={(evt) => setRatingInput(evt.value)}
            value={ratingInput}
            onKeyPress={async (evt) => {
              if (evt.charCode === 13)
                setRatingMsg(
                  await fetchResponse(ratingInput, categories.RATING)
                );
            }}
          />
          <button
            className={utilStyles.button}
            onClick={async () =>
              setRatingMsg(await fetchResponse(ratingInput, categories.RATING))
            }
          >
            Process
          </button>
        </div>
        <InlineResponse msg={ratingMsg} />
      </div>
      <div className={utilStyles.card}>
        <h2 className={utilStyles.headingMd}>Name Identification</h2>
        <p>What is your full name?</p>
        <div className={utilStyles.inputGroup}>
          <input
            className={utilStyles.input}
            onChange={(evt) => setNameInput(evt.value)}
            value={nameInput}
            onKeyPress={async (evt) => {
              if (evt.charCode === 13)
                setNameMsg(
                  await fetchResponse(nameInput, categories.FULL_NAME)
                );
            }}
          />
          <button
            className={utilStyles.button}
            onClick={async () =>
              setNameMsg(await fetchResponse(nameInput, categories.FULL_NAME))
            }
          >
            Process
          </button>
        </div>
        <InlineResponse msg={nameMsg} />
      </div>
      <div className={utilStyles.card}>
        <h2 className={utilStyles.headingMd}>Numerical Identification</h2>
        <p>What is your current salary?</p>
        <div className={utilStyles.inputGroup}>
          <input
            className={utilStyles.input}
            onChange={(evt) => setNumericInput(evt.value)}
            value={numericInput}
            onKeyPress={async (evt) => {
              if (evt.charCode === 13)
                setNumericMsg(
                  await fetchResponse(numericInput, categories.NUMERIC)
                );
            }}
          />
          <button
            className={utilStyles.button}
            onClick={async () =>
              setNumericMsg(
                await fetchResponse(numericInput, categories.NUMERIC)
              )
            }
          >
            Process
          </button>
        </div>
        <InlineResponse msg={numericMsg} />
      </div>
    </Layout>
  );
}
