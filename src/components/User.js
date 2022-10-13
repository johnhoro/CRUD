import { Link } from "react-router-dom";

function User({ user, removeUser, editUser, index }) {
  return (
    <li>
      <div>
        <h3>{user.name}</h3>
        <p>{user.username}</p>
      </div>
      <Link
        to={{
          pathname: `/edit/${user.username}`,
          id: index,
        }}
      >
        <button onClick={() => editUser(index)}>Edit</button>
      </Link>
      <span onClick={() => removeUser(index)}>X</span>
    </li>
  );
}

export default User;
