import ArticleHeader from "../components/ArticleHeader";
import ArticleTitle from "../components/ArticleTitle";
import SlimNav from "../components/SlimNav";
import Container from "react-bootstrap/Container";
import MenuOptions from "../components/MenuOptions";
import MenuNews from "../components/MenuNews";
import MenuNewsArticles from "../components/MenuNewsArticles";

export default function Article() {
  return (
    <>
      <SlimNav />
      <Container>
        <ArticleHeader />
        <ArticleTitle />
        <MenuOptions />
        <MenuNews />
        <MenuNewsArticles />
      </Container>
    </>
  );
}
