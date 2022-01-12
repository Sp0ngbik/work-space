import { Button } from "antd";
import style from "./style.module.scss";

const Welcome = () => {
  console.log("hello");
  return (
    <div className={style.page}>
      <div className={style.mainBlock}>
        <div>Hello my name is Vlad</div>
        <div>
          So, this is my work space, i'm tryna do some stuff here, do some
          practice and learn some stuff, you can enjoy my process by clicking on
          this button bellow
        </div>
        <Button>Click!</Button>
      </div>
    </div>
  );
};

export default Welcome;
