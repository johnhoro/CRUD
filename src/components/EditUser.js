import { useState } from "react";
import { withRouter } from "react-router-dom";

function EditUser(props) {
  let id = props.location.id;
  let [name, setName] = useState(
    JSON.parse(localStorage.getItem("data"))[id].name
  );
  let [username, setUserName] = useState(
    JSON.parse(localStorage.getItem("data"))[id].username
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"));
    let obj = { name, username };
    data[id] = obj;
    localStorage.setItem("data", JSON.stringify(data));
    props.history.push("/");
  };
  const handleChange = ({ target }) => {
    console.dir(target.dataset);
    let { id } = target.dataset;
    if (id === "name") {
      setName(target.value);
    }
    if (id === "username") {
      setUserName(target.value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="Enter Name"
          data-id="name"
          onChange={handleChange}
        />
        <input
          value={username}
          type="text"
          placeholder="Enter Username"
          data-id="username"
          onChange={handleChange}
        />
        <input type="submit" value="Update User" />
      </form>
    </>
  );
}

export default withRouter(EditUser);
