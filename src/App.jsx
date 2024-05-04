import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./index.css";
import UserCard from "./components/UserCard";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
function App() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(false);
  const getUsers = async () => {
    setLoading(true);
    const userData = await fetch("https://reqres.in/api/users?page=1");
    const response = await userData.json();
    setLoading(false);
    setUsers(response.data);
  };
  return (
    <div>
      <Navbar handleClick={getUsers} />
      {loading === true ? (
        <center>
          <Spinner animation="border" />
        </center>
      ) : (
        <div className="userCardBox">
          {users.map((user) => {
            return (
              <UserCard
                key={user.id}
                avatar={user.avatar}
                firstName={user.first_name}
                lastName={user.last_name}
                email={user.email}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
