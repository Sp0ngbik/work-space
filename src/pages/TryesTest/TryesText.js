import { Spin } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

const TryesText = () => {
  // const [baseState, setBaseState] = useState();
  const [userState, setUserState] = useState();
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/todos/").then((data) => {
    //   setBaseState(data);
    // });
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((data) => {
        setUserState(data.data.items);
      });
  }, []);
  userState && console.log(userState);
  // const stateRenderBase = ({ data }) => {
  //   return data.map((el) => {
  //     return <div key={el.id}>{el.title}</div>;
  //   });
  // };
  return (
    <div>
      {/* <div>{baseState ? stateRenderBase(baseState) : <Spin />}</div>; */}
      <div>
        {userState ? (
          userState.map((el) => {
            return <div key={el.id}>{el.name}</div>;
          })
        ) : (
          <Spin />
        )}
      </div>
    </div>
  );
};

export default TryesText;
