import style from "./style.module.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className={style.infoBlock}>
      <div>
        So, here u can see by links my practice with some stuff of js and react
        libraries like axios, antd, router-dom, preprocessors scss, by using
        this links
      </div>
      <div className={style.links}>
        <Link to="/about/type-of">
          <Button>Types of js</Button>
        </Link>
        <Link to="/about/array-practice">
          <Button>Arrays</Button>
        </Link>
        <Link to="/about/classes">
          <Button>Classes</Button>
        </Link>
        <Link to="/about/promises">
          <Button>Promises</Button>
        </Link>
        <Button
          onClick={() => {
            alert(
              "Must be name here)  you already see this buttons, and you will see more by using my links ;D"
            );
          }}
        >
          antd design
        </Button>
      </div>
    </div>
  );
};
export default About;
