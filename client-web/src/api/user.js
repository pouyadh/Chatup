const fetchUser = async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((resp) =>
    resp.json()
  );
};
export default fetchUser;
