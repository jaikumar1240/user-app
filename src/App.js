import { useState } from 'react';
import './App.css';
import React from 'react';
import Inputs from './components/Inputs/Inputs';
import List from './components/List/List';

function App() {
  let Users = [{ name: 'Jai', age: '24', key: Math.random() }];
  const [oldUser, setOldUser] = useState(Users)
  // const [showModal, setShowModal] = useState(false);
  const userAdded = (event) => {
    // if (!event.age) {
    //   setShowModal(true);
    //   console.log(showModal);
    // }
    // else setShowModal(false)
    setOldUser(prev => {
      return [...prev, event]

    })
  }
  const deleteUser = (event) => {
    console.log(event);
    setOldUser((prev) => {
      return prev.filter((res) => prev.indexOf(res) !== event)
    }
    )
  }
  return (
    <React.Fragment className="App">
      <Inputs userData={userAdded} />
      <List users={oldUser} deleteUserIndex={deleteUser} />

    </React.Fragment>
  );
}

export default App;
