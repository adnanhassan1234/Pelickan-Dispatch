export const onGetCred = () => {
  const cred = localStorage.getItem("rememberMe");
  try {
    const userCred = JSON.parse(cred || "");

    return userCred;
  } catch (err) {
    // console.log("error", err);
  }
};

export const onSaveCred = (cred) => {
  localStorage.setItem("rememberMe", JSON.stringify(cred));
};

export const onRemoveCred = () => {
  localStorage.removeItem("rememberMe");
};
