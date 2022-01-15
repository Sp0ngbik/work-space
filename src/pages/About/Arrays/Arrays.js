import { Input, Form, Button } from "antd";
// import { useState } from "react";
import style from "./style.module.scss";

const Arrays = () => {
  //   const [arrayText, setArrayText] = useState();

  return (
    <div className={style.arrayBody}>
      <div className={style.array}>
        You can type anything and i will reverse it, by using some magic trick
        <Form
          onFinish={(info) => {
            let arr = [];
            arr.push(info.reverseText);
            arr = arr.toString().split("").reverse().join("");
            alert(arr);
          }}
        >
          <Form.Item name="reverseText">
            <Input placeholder="type anything" />
          </Form.Item>
          <Button htmlType="submit">send</Button>
        </Form>
      </div>
    </div>
  );
};

export default Arrays;
