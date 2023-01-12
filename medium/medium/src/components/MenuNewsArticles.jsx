export default function MenuNewsArticles() {
  const News = [
    {
      from: "",
      date: "Dec 24, 2022",
      title: "2022: The year that changed the way we work",
      article: "articles",
      image: "https://placeimg.com/100/100/people?t=1673509945561",
      menu: "Productivity",
      readTime: "8 min read",
    },
    {
      from: "",
      date: "Dec 24, 2022",
      title: "2022: The year that changed the way we work",
      article: "articles",
      image: "https://placeimg.com/100/100/people?t=1673509945561",
      menu: "Productivity",
      readTime: "8 min read",
    },
    {
      from: "",
      date: "Dec 24, 2022",
      title: "2022: The year that changed the way we work",
      article: "articles",
      image: "https://placeimg.com/100/100/people?t=1673509945561",
      menu: "Productivity",
      readTime: "8 min read",
    },
    {
      from: "Published in Towards Data Science",
      date: "Dec 24, 2022",
      title: "2022: The year that changed the way we work",
      article: "articles",
      image: "https://placeimg.com/100/100/people?t=1673509945561",
      menu: "Productivity",
      readTime: "8 min read",
    },
    {
      from: "Published in Towards Data Science",
      date: "Dec 24, 2022",
      title: "2022: The year that changed the way we work",
      article: "articles",
      image: "https://placeimg.com/100/100/people?t=1673509945561",
      menu: "Productivity",
      readTime: "8 min read",
    },
  ];

  return (
    <div>
      {News.map((user) => (
        <div>
          {user.date}
          {user.from}
          {user.title}
          {user.article}
          {user.image}
          {user.menu}
          {user.readTime}
        </div>
      ))}
    </div>
  );
}
