import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Userp from './Pages/Userp';
function App() {
  // const [data, setData] = useState([]);

  // const getData = () => {
  //   axios.get("https://picsum.photos/v2/list")
  //     .then((response) => {
  //       setData(response.data);  // API se data set kar rahe hain
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  // };

  // const users = [
  //   { name: "Amit Sharma", age: 21, profession: "Engineering Student" },
  //   { name: "Priya Verma", age: 22, profession: "Medical Student" },
  //   { name: "Rahul Gupta", age: 20, profession: "Law Student" },
  //   { name: "Neha Singh", age: 23, profession: "Business Student" }
  // ];

  return (
    <>
      {/* <h2>Five students details are there</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Card user={user} />
          </li>
        ))}
      </ul>

      {/*
      <div style={{ marginTop: "20px" }}>
        <button onClick={getData}
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
          Get Data
        </button>

        <div style={{
          marginTop: "10px",
          padding: "5px",
          backgroundColor: 'lightblue',
          borderRadius: '5px'
        }}>
          {data.length > 0 ? (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  {item.author} - {item.url}
                </li>
              ))}
            </ul>
          ) : "No data available"}
        </div>
      </div> */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:userid' element={<Userp/>} />
        <Route />
        <Route />
      </Routes>
    </>
  );
}

export default App;
