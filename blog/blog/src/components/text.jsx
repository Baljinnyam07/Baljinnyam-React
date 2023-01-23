import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Text() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/articles/" + id)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.body);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <p>{article.id}</p>
    </div>
  );
}
