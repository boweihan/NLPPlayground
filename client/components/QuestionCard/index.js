import { useState } from "react";
import ReactTooltip from "react-tooltip";
import DotLoader from "react-spinners/DotLoader";
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
  tip,
}) {
  const [loading, setLoading] = useState(false);

  const onClickWithLoading = async () => {
    setLoading(true);
    setTimeout(async () => {
      await onClick();
      setLoading(false);
    }, 300);
  };

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
          onKeyPress={async (evt) => {
            if (evt.charCode === 13) {
              onClickWithLoading();
            }
          }}
        />
        <button className={utilStyles.button} onClick={onClickWithLoading}>
          {loading ? <DotLoader size={15} color={"white"} /> : <>Process</>}
        </button>
      </div>
      <InlineResponse msg={response} />
      <p className={utilStyles.tooltip} data-tip data-for={heading}>
        -- Technical Implementation Notes --
      </p>
      <ReactTooltip id={heading} aria-haspopup="true">
        {tip}
      </ReactTooltip>
    </div>
  );
}
