import { Button } from "antd";
import { Link } from "react-router-dom";
import style from ".//style.module.scss";

const Partfolio = () => {
  return (
    <div className={style.partfolioBody}>
      <Link to="/partfolio/first">
        <Button>First site</Button>
      </Link>
      <Link to="/partfolio/second">
        <Button>Second site</Button>
      </Link>
      <Link to="/partfolio/third">
        <Button>Third site</Button>
      </Link>
      <Link to="/partfolio/fourth">
        <Button>Fourth site</Button>
      </Link>
    </div>
  );
};

export default Partfolio;
