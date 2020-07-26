import Select from "react-select";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const options = [
  { value: "/models/one", label: "Model #1" },
  { value: "/models/two", label: "Model #2" },
  { value: "/models/three", label: "Model #3" },
];

export default function ModelSelect() {
  const router = useRouter();

  const onChange = (option) => {
    router.push(option.value);
  };

  return (
    <div className={styles.container}>
      <Select className={styles.select} options={options} onChange={onChange} />
    </div>
  );
}
