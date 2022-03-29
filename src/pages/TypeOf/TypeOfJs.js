import { Input, Form, Button } from "antd";
import { useState } from "react";
import style from "./style.module.scss";
//СДЕЛАТЬ НА РЕДАКСЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const TypeOfJs = () => {
  const [answer, setAnswer] = useState();
  const [secAnswer, setSecAnswer] = useState();
  const [thrdAnswer, setThrdAnswer] = useState();
  const typeFunc = () => {
    return (
      <div className={style.test}>
        <div className={answer === 1 ? style.trueAns : null}>
          true + false =
        </div>

        <Form
          onFinish={(output) => {
            let result = true + false;
            if (output.first === result.toString()) {
              setAnswer(1);
              alert("you right, good job");
            } else {
              alert("try again");
            }
          }}
        >
          <div className={style.formBody}>
            <Form.Item name="first">
              <Input placeholder="answer"></Input>
            </Form.Item>
            <Form.Item>
              <Button className={style.subButton} htmlType="submit">
                submit
              </Button>
            </Form.Item>
          </div>
        </Form>
        <div className={secAnswer === 2 ? style.trueAns : null}>
          What is type of "this" =
        </div>

        <Form
          onFinish={(output) => {
            let result = "";
            if (output.second === typeof result) {
              setSecAnswer(2);
              alert("you right, good job");
            } else {
              alert("try again");
            }
          }}
        >
          <div className={style.formBody}>
            <Form.Item name="second">
              <Input placeholder="answer"></Input>
            </Form.Item>
            <Form.Item>
              <Button className={style.subButton} htmlType="submit">
                submit
              </Button>
            </Form.Item>
          </div>
        </Form>
        <div className={thrdAnswer === 3 ? style.trueAns : null}>
          true + false =
        </div>

        <Form
          onFinish={(output) => {
            let result = true + false;
            if (output.third === result.toString()) {
              setThrdAnswer(3);
              alert("you right, good job");
            } else {
              alert("try again");
            }
          }}
        >
          <div className={style.formBody}>
            <Form.Item name="third">
              <Input placeholder="answer"></Input>
            </Form.Item>
            <Form.Item>
              <Button className={style.subButton} htmlType="submit">
                submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  };
  return <div className={style.test}>{typeFunc()}</div>;
};

export default TypeOfJs;
