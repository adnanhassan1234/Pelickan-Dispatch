export const onGetToken = () => {
  const tokenString = localStorage.getItem("token");
  try {
    const userToken = JSON.parse(tokenString || "");
    return userToken?.token;
  } catch (err) {
    // console.log("error", err);
  }
};

export const onSaveToken = (userToken) => {
  localStorage.setItem("token", JSON.stringify(userToken));
};

export const onRemoveToken = () => {
  localStorage.clear();
};
