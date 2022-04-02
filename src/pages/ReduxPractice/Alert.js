import { Alert } from "antd";

export const AlertJSX = ({ text }) => {
  return <Alert message={text} type="error" />;
};
