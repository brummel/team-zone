import React, { useEffect, useState } from "react";
import UserService from "../UserService";
import IUser from "../../common/IUser";

interface AppProps {
  userService: UserService;
}

const App: React.FC<AppProps> = ({ userService }) => {
  const [users, setUsers] = useState<IUser[]>([]);

  const updateUsers = () => {
    const users = userService.getUsers().then((users) => {
      console.log("Setting users:", users);
      setUsers(users);
    });
  };

  useEffect(() => {
    if (users.length === 0) {
      updateUsers();
    }
  }, [users]);

  return (
    <div className="container">
      <ul className="list-group">
        {users.map((user) => (
          <li key={user._id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-outline-primary float-right"
        onClick={updateUsers}
      >
        Update
      </button>
    </div>
  );
};

export default App;
