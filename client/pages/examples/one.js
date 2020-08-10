import { useState } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import QuestionCard from "../../components/QuestionCard";
import utilStyles from "../../styles/utils.module.css";
import axios from "axios";
import { SERVER } from "../../config";

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
    response = (
      await axios.get(SERVER + `/example/1/${category}?input=${input}`)
    ).data;
  } catch (e) {
    console.log(e);
    response = e.message;
  }
  return response;
};

export default function ExampleOne() {
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

  const cards = [
    {
      heading: "Booleans",
      question: `Do you have reliable transportation? Please respond with "Yes" or
      "No".`,
      value: booleanInput,
      response: booleanMsg,
      onChange: (evt) => setBooleanInput(evt.currentTarget.value),
      onClick: async () => {
        setBooleanMsg("");
        setBooleanMsg(await fetchResponse(booleanInput, categories.BOOLEAN));
      },
      tip: (
        <>
          <p>
            User input is compared against a bank of words that represent
            confirmation or opposition.
          </p>
          <ul>
            <li>All phrases representing confirmation are treated as "YES".</li>
            <li>All phrases representing opposition are treated as "NO".</li>
            <li>Matching is case insensitive.</li>
          </ul>
          <p>This is a case where a database of words is likely adequate.</p>
          <i>
            <p>Example: yes, yeah, affirmative, naw, nope</p>
          </i>
        </>
      ),
    },
    {
      heading: "Multiple Choice",
      question: `What make of car are you currently driving? A - Toyota, B - Mazda, C -
      Lexus, D - Other`,
      value: multipleChoiceInput,
      response: multipleChoiceMsg,
      onChange: (evt) => setMultipleChoiceInput(evt.currentTarget.value),
      onClick: async () => {
        setMultipleChoiceMsg("");
        setMultipleChoiceMsg(
          await fetchResponse(multipleChoiceInput, categories.MULTIPLE_CHOICE)
        );
      },
      tip: (
        <>
          <p>
            User input is validated to match either the option (i.e. A) or
            keywords in the response (i.e. Toyota).
          </p>
          <ul>
            <li>Matching is case insensitive.</li>
            <li>Failure to match is treated as an invalid response.</li>
          </ul>
          <i>
            <p>Example: a, A, Toyota, toyota, Lexus</p>
          </i>
        </>
      ),
    },
    {
      heading: "Rating Scale",
      question: `One a scale of 1-10, how happy are you right now?`,
      value: ratingInput,
      response: ratingMsg,
      onChange: (evt) => setRatingInput(evt.currentTarget.value),
      onClick: async () => {
        setRatingMsg("");
        setRatingMsg(await fetchResponse(ratingInput, categories.RATING));
      },
      tip: (
        <>
          <p>User input is compared against a set of valid inputs (1 to 10)</p>
          <ul>
            <li>Numbers can be parsed as exact matches.</li>
            <li>Error messages for out-of-bound inputs</li>
          </ul>
          <p>This example does not leverage numerical recognition.</p>
          <p>Rating scale questions likely have a one letter response.</p>
          <i>
            <p>Example: 1, 3, 5, 7, 11</p>
          </i>
        </>
      ),
    },
    {
      heading: "Name Identification",
      question: `What is your full name? i.e. "John Smith"`,
      value: nameInput,
      response: nameMsg,
      onChange: (evt) => setNameInput(evt.currentTarget.value),
      onClick: async () => {
        setNameMsg("");
        setNameMsg(await fetchResponse(nameInput, categories.FULL_NAME));
      },
      tip: (
        <>
          <p>User input is annotated and parsed using Stanford NLP models.</p>
          <ul>
            <li>
              Input is filtered to words representing proper nouns representing
              names.
            </li>
            <li>Names are concatenated to represent a full name.</li>
            <li>Model annotation is case insensitive.</li>
            <li>Order is used as a differentiator for name order.</li>
          </ul>
          <i>
            <p>Example: My name is George Bush</p>
            <p>Example: Gary Yip is my full name</p>
          </i>
        </>
      ),
    },
    {
      heading: "Numerical Identification",
      question: `What is your current annual salary? i.e. 40000`,
      value: numericInput,
      response: numericMsg,
      onChange: (evt) => setNumericInput(evt.currentTarget.value),
      onClick: async () => {
        setNumericMsg("");
        setNumericMsg(await fetchResponse(numericInput, categories.NUMERIC));
      },
      tip: (
        <>
          <p>User input is annotated and parsed using Stanford NLP models.</p>
          <ul>
            <li>Input is filtered to valid numbers.</li>
            <li>Only the first number is considered.</li>
            <li>
              This model doesn't handle written numbers (i.e. Fourty Thousand)
            </li>
          </ul>
          <i>
            <p>Example: 40000, 40,000, My salary is $60,000</p>
            <p>Example: I'm paid about 50000 bucks every year</p>
          </i>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Example 1</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Example 1</h1>
      {cards.map((card) => (
        <QuestionCard key={card.heading} {...card} />
      ))}
    </Layout>
  );
}
