import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import CardList from "../components/CardList";

function App() {
  const [userData, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setData(users);
      });
  }, []);

  const [name, setName] = useState("");

  function searchName(event) {
    setName(event.target.value);
  }
  const filteredUsers = userData.filter((info) => {
    return info.name.toLowerCase().includes(name.toLowerCase());
  });

  return (
    !userData.length ? <h1>Loading</h1> :
    <div className="tc">
      <h1>Nekofriends</h1>
      <SearchBox searchChange={searchName} />
      <Scroll>
        <CardList userList={filteredUsers} />
      </Scroll>
    </div>
      
  );
}

export default App;
