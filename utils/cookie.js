import Cookies from "js-cookie";

export const setToken = (token) => {
  Cookies.set("tokey", token, { expires: 1 }); // Set token for 1 day
};

export const getToken = () => {
  return Cookies.get("tokey");
};
export const removeToken = () => {
  Cookies.remove("tokey");
};
