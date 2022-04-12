import { Link } from "react-router-dom";
import "./styles/postcard.styles.css";

const PostCard = (props) => {
  const { size = "", path = "", children } = props;

  return (
    <Link to={path} className="card_link">
      <div
        className={`categoryCard ${
          size === "large" ? "largeCard" : "smallCard"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default PostCard;
