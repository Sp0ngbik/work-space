import { Button } from "antd";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Welcome = () => {
  return (
    <div className={style.bodyOfMain}>
      <div className={style.mainBlock}>
        <div>Hello my name is Vlad</div>
        <div>
          So, this is my work space, i'm tryna do some stuff here, do some
          practice and learn some stuff, you can enjoy my process by clicking on
          this button bellow
        </div>
        <Link to="/about">
          <Button>Click!</Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
