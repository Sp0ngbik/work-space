import { Spin } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

const TryesText = () => {
  const [baseState, setBaseState] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((data) => {
      setBaseState(data);
    });
  }, []);
  const stateRenderBase = ({ data }) => {
    return data.map((el) => {
      return <div key={el.id}>{el.title}</div>;
    });
  };
  return <div>{baseState ? stateRenderBase(baseState) : <Spin />}</div>;
};

export default TryesText;
