import { useState } from "react";
import UserForm from "./components/UserForm";
import User from "./components/User";
import "./stylesheets/style.css";

function App() {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const addUser = (name, username) => {
    let obj = { name, username };
    console.log(obj);
    setData(data.concat(obj));
    localStorage.setItem("data", JSON.stringify(data.concat(obj)));
  };
  const removeUser = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };
  const editUser = (index) => {
    const newUsers = [...data];
    const user = newUsers[index];
  };
  return (
    <div className="container">
      <h1>User List</h1>
      <UserForm addUser={addUser} />
      <ul>
        {data.length !== 0 && (
          <li>
            {data.length > 1
              ? `${data.length} Users added`
              : `${data.length} User added`}{" "}
          </li>
        )}
        {data.map((user, index) => (
          <User
            key={index}
            index={index}
            user={user}
            removeUser={removeUser}
            editUser={editUser}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
