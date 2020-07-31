import { useState } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import QuestionCard from "../../components/QuestionCard";
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

  const cards = [
    {
      heading: "Booleans",
      question: `Do you have reliable transportation? Please respond with "Yes" or
      "No".`,
      value: booleanInput,
      response: booleanMsg,
      onChange: (evt) => setBooleanInput(evt.value),
      onClick: async () =>
        setBooleanMsg(await fetchResponse(booleanInput, categories.BOOLEAN)),
    },
    {
      heading: "Multiple Choice",
      question: `What make of car are you currently driving? A - Toyota, B - Mazda, C -
      Lexus, D - Other`,
      value: multipleChoiceInput,
      response: multipleChoiceMsg,
      onChange: (evt) => setMultipleChoiceInput(evt.value),
      onClick: async () =>
        setMultipleChoiceMsg(
          await fetchResponse(multipleChoiceInput, categories.MULTIPLE_CHOICE)
        ),
    },
    {
      heading: "Rating Scale",
      question: `One a scale of 1-10, how happy are you right now?`,
      value: ratingInput,
      response: ratingMsg,
      onChange: (evt) => setRatingInput(evt.value),
      onClick: async () =>
        setRatingMsg(await fetchResponse(ratingInput, categories.RATING)),
    },
    {
      heading: "Name Identification",
      question: `What is your full name?`,
      value: nameInput,
      response: nameMsg,
      onChange: (evt) => setNameInput(evt.value),
      onClick: async () =>
        setNameMsg(await fetchResponse(nameInput, categories.FULL_NAME)),
    },
    {
      heading: "Numerical Identification",
      question: `What is your current salary?`,
      value: numericInput,
      response: numericMsg,
      onChange: (evt) => setNumericInput(evt.value),
      onClick: async () =>
        setNumericMsg(await fetchResponse(numericInput, categories.NUMERIC)),
    },
  ];

  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Model 1</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Model 1</h1>
      {cards.map((card) => (
        <QuestionCard
          key={card.heading}
          heading={card.heading}
          question={card.question}
          value={card.value}
          response={card.response}
          onChange={card.onChange}
          onClick={card.onClick}
        />
      ))}
    </Layout>
  );
}
