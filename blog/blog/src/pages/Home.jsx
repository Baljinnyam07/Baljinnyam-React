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
  // const articles = [
  //   {
  //     image: "https://news.mn/wp-content/uploads/2023/01/News114-1-530x330.jpg",
  //     title: "Ш.ЭРДЭНЭЖАРГАЛ, Б.НАРАНХҮҮ, М.ДӨЛГӨӨН НАРЫГ ХОРЬЖЭЭ",
  //   },
  //   {
  //     image:
  //       "https://news.mn/wp-content/uploads/2023/01/Mongol-Khan-2-530x330.jpg",
  //     title: "“МОНГОЛ ХААН” ДЭЛХИЙН ТАЙЗЫГ ТАМГАЛНА",
  //   },
  //   {
  //     image: "https://news.mn/wp-content/uploads/2023/01/1251-1-530x330.jpg",
  //     title: "ЭРДЭС БҮТЭЭГДЭХҮҮНИЙ ЭКСПОРТ 11,754 САЯ ДОЛЛАРТ ХҮРЧЭЭ",
  //   },
  //   {
  //     image:
  //       "https://news.mn/wp-content/uploads/2023/01/128340938_ze_davos_1-530x330.jpg",
  //     title: "DAVOS-2023: ЗЕЛЕНСКИЙ БАРУУНЫ ТҮНШҮҮДЭЭСЭЭ ЗЭВСЭГ",
  //   },
  // ];
  console.log(categories[0]);
  return (
    <main>
      <div className="container">
        <div className="row">
          {categories.map((category) => (
            <div className="col-md-3 col-sm-6 col-12">
              <Card title={category.name} image={category.imageUrl} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
