import Card from "../components/Card";

export default function Home() {
  const articles = [
    {
      image: "https://news.mn/wp-content/uploads/2023/01/News114-1-530x330.jpg",
      title: "Ш.ЭРДЭНЭЖАРГАЛ, Б.НАРАНХҮҮ, М.ДӨЛГӨӨН НАРЫГ ХОРЬЖЭЭ",
    },
    {
      image:
        "https://news.mn/wp-content/uploads/2023/01/Mongol-Khan-2-530x330.jpg",
      title: "“МОНГОЛ ХААН” ДЭЛХИЙН ТАЙЗЫГ ТАМГАЛНА",
    },
    {
      image: "https://news.mn/wp-content/uploads/2023/01/1251-1-530x330.jpg",
      title: "ЭРДЭС БҮТЭЭГДЭХҮҮНИЙ ЭКСПОРТ 11,754 САЯ ДОЛЛАРТ ХҮРЧЭЭ",
    },
    {
      image:
        "https://news.mn/wp-content/uploads/2023/01/128340938_ze_davos_1-530x330.jpg",
      title: "DAVOS-2023: ЗЕЛЕНСКИЙ БАРУУНЫ ТҮНШҮҮДЭЭСЭЭ ЗЭВСЭГ",
    },
  ];
  return (
    <main>
      <div className="container">
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-3 col-sm-6 col-12">
              <Card title={article.title} image={article.image} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
