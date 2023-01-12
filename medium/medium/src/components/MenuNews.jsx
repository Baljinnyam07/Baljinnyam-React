import { BsFillChatSquareDotsFill } from "react-icons/bs";

export default function MenuNews() {
  return (
    <div>
      <div className="d-flex">
        <h4>More from Cassie Kozyrkov</h4>
        <div className="slim-nav-link main-btn">Follow</div>
        <div className="slim-nav-link main-btn">
          <BsFillChatSquareDotsFill />
        </div>
      </div>
      <div>
        <p>
          Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art,
          theatre, decision science. All views are my own. twitter.com/quaesita
        </p>
      </div>
    </div>
  );
}
