import axios from "axios";
import { useEffect, useState } from "react";

export default function Openai() {
  const [openAi, setOpenAi] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8000/generate").then((res) => {
      setOpenAi(res.data);
    });
  });
  return (
    <>
      <div>Prompt</div>
      <input type="text" />
      <img src={"image"} alt={"dog"} />
    </>
  );
}
