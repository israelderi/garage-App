import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Mycomponents/Home';
import Signup from './Mycomponents/Signup';
import Customer from './Mycomponents/Customer';
import './App.css';

function App() {
  const [clients, setclients] = useState([])
  
  const getNewUsers = (newUserName, newId, newAddress, newPhoneNum, newCaNum) => {
    setclients([...clients, {
      userName : newUserName,
      id: newId,
      address: newAddress,
      phoneNum: newPhoneNum,
      carNum: newCaNum,
      historyFixes: []
  }])
  }
  
  const [clientLogIn, setclientLogIn] = useState('');
  const getClientLink = () =>{
    return '/' + clientLogIn.id;
  }
  
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Home clients={clients} getClientLink={getClientLink} clientLogIn={clientLogIn} setclientLogIn={setclientLogIn}/>} />
          <Route path='/SignUp' element={<Signup getNewUsers={getNewUsers} />} />
          <Route path={getClientLink()} element={<Customer client ={clientLogIn} getNewUsers={getNewUsers}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
