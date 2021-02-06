import { get } from "axios";
export const postRequest = () => {
  return get("http://jsonplaceholder.typicode.com/posts");
};
