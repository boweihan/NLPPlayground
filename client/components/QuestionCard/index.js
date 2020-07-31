import utilStyles from "../../styles/utils.module.css";

const InlineResponse = ({ msg }) => {
  return msg && <p className={utilStyles.inlineResponse}>{msg}</p>;
};

export default function QuestionCard({
  heading,
  question,
  value,
  onChange,
  onClick,
  response,
}) {
  return (
    <div className={utilStyles.card}>
      <h2 className={utilStyles.headingMd}>{heading}</h2>
      <p>{question}</p>
      <div className={utilStyles.inputGroup}>
        <input
          type="text"
          className={utilStyles.input}
          onChange={onChange}
          value={value}
          onKeyPress={(evt) => {
            if (evt.charCode === 13) {
              onClick();
            }
          }}
        />
        <button className={utilStyles.button} onClick={onClick}>
          Process
        </button>
      </div>
      <InlineResponse msg={response} />
    </div>
  );
}
