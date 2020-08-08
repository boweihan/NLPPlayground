import Select from "react-select";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const options = [
  { value: "/examples/one", label: "Example #1" },
  { value: "/examples/two", label: "Example #2" },
  { value: "/examples/three", label: "Example #3" },
];

export default function ExampleSelect() {
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
