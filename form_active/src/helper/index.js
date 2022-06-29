export const cookieFilter = () => {
  const word = document.cookie.split(";");
  const arrCookie = [];
  word.map((item) => {
    return arrCookie.push(item.split("="));
  });
  // console.log(test);
  return arrCookie.find((item) => item[0].replaceAll(" ", "") === "jwt_user");
};

export const scoreDataFilter = () => {
  const word = document.cookie.split(";");
  const arrCookie = [];
  word.map((item) => {
    return arrCookie.push(item.split("="));
  });
  // console.log(test);
  return arrCookie.find(
    (item) => item[0].replaceAll(" ", "") === "score_student_data"
  );
};
