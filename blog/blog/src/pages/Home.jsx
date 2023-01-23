import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.body);
      });
  }, []);
  console.log(categories[0]);
  return (
    <main>
      <div className="container">
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-3 col-sm-6 col-12" key={index}>
              <Card title={category.name} image={category.imageUrl} id={category.id} articleId={category.id} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
