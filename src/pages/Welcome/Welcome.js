import { Button } from "antd";
import style from "./style.module.scss";

const Welcome = () => {
  return (
    <div className={style.mainBlock}>
      <h3>Hello my name is Vlad</h3>
      <div>
        So, this is my work space, i'm tryna do some stuff here, do some
        practice and learn some stuff, you can enjoy my process by clicking on
        this button bellow
      </div>
      <Button>Click!</Button>
    </div>
  );
};

export default Welcome;
