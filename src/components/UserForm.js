import { useState } from "react";

function UserForm({ addUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(name, username);
    setName("");
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name "
        value={name}
        data-id={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        data-id={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input type="submit" value="Add user" />
    </form>
  );
}

export default UserForm;
