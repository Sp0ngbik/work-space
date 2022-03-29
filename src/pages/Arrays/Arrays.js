import { Input, Form, Button } from "antd";
// import { useState } from "react/cjs/react.development";
import style from "./style.module.scss";

const Arrays = () => {
  let pointArr = [0];
  return (
    <div className={style.arrayBody}>
      <div className={style.array}>
        You can type anything and i will reverse it, by using some magic trick.
        <Form
          onFinish={(info) => {
            let arr = [];
            arr.push(info.reverseText);
            arr = arr.toString().split("").reverse().join("");
            alert(arr);
          }}
        >
          <div className={style.formLined}>
            <Form.Item name="reverseText">
              <Input placeholder="type anything" />
            </Form.Item>
            <Button htmlType="submit">send</Button>
          </div>
        </Form>
        And here is the cut magic, i will use my "magic saw", to cut your text.
        <Form
          onFinish={(info) => {
            let arr = [];
            arr.push(info.spliceText);
            arr = arr.toString().split(" ");

            if (arr.length <= 1) {
              arr = arr.toString().split("");
              arr = arr.splice(0, arr.length / 2).join("");
              alert(arr);
            } else {
              arr = arr.toString().split(",");
              arr = arr.splice(0, arr.length / 2).join(" ");
              alert(arr);
            }
          }}
        >
          <div className={style.formLined}>
            <Form.Item name="spliceText">
              <Input placeholder="type anything" />
            </Form.Item>
            <Button htmlType="submit">send</Button>
          </div>
        </Form>
        If you my friend had a hard choice and dont know what to select , write
        to me some numbers, and i resolve your problem, you can type any number
        and any words with space.
        <Form
          onFinish={(info) => {
            let arr = [];
            arr.push(info.randomText);
            !isNaN(arr)
              ? (arr = Math.round(Math.random() * arr)) && alert(arr)
              : (arr = arr.toString().split(" ")) &&
                alert(arr[Math.round(Math.random() * (arr.length - 1))]) &&
                console.log(arr);
          }}
        >
          <div className={style.formLined}>
            <Form.Item name="randomText">
              <Input placeholder="type anything" />
            </Form.Item>
            <Button htmlType="submit">send</Button>
          </div>
        </Form>
        In this field i will play with you in "points"(21)
        <Form>
          <div className={style.formLined}>
            <Form.Item>
              <Button
                onClick={() => {
                  let value = Math.round(Math.random() * 11);
                  pointArr.push(value);
                  // let b = pointArr.reduce((el, total) => el + total);
                  // console.log(b);
                  // let el = document
                  //   .getElementsByClassName(".value")
                  //   .innerHtml();
                  // console.log(el);
                }}
              >
                More
              </Button>
            </Form.Item>
            <Button htmlType="submit">Enough</Button>
          </div>
          <div className={style.value}>
            Your current value is :{pointArr} / (21)
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Arrays;
