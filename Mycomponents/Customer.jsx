import React, { useState } from 'react'
import { Navigate } from 'react-router';

const Fixes = [
  { Code: '111', Description: 'fix 1', time: 1, price: 200 },
  { Code: '222', Description: 'fix 2', time: 2, price: 100 },
  { Code: '333', Description: 'fix 3', time: 3, price: 300 },
  { Code: '444', Description: 'fix 4', time: 4, price: 250 }
]

export default function Client(props) {

  const [showClient, setshowClient] = useState(false);
  const [navToHome, setnavToHome] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [fixex, setfixex] = useState('')

  const addfix = () => {
    let ThisCustomer = props.client;
    Fixes.forEach(f => {
      if (f.Code == fixex) {
        alert('fix Added successfully')
        ThisCustomer.historyFixes.push(f)
        props.getNewUsers(ThisCustomer)
      }
    })
  }


  return (
    <div>
      <h1 style={{ 'fontSize': '50px', 'color': 'blue' }}>Hello {props.client.userName}</h1><br /><hr />
      <button onClick={() => { setShowHistory(!showHistory) }} className='CustomerPageButt'>Customer history</button>
      <button onClick={() => { setshowClient(!showClient) }} className='CustomerPageButt'>customer details</button><hr />
      <br /><input type="text" placeholder='Enter fault number' onChange={event => setfixex(event.target.value)} className='inputStyle' />
      <button onClick={addfix} className='faultButt'>Insert</button><br />
      <br /><button onClick={() => { setnavToHome(!navToHome) }} className='faultButt'>Home</button>
      <div className=' ClientDetails' style={showClient ? { 'display': 'block' } : { 'display': 'None' }}>
        <div className='col'>
          Name : {props.client.userName}
        </div>
        <div className='col'>
          id : {props.client.id}
        </div>
        <div className='col'>
          Address : {props.client.address}
        </div>
        <div className='col'>
          phone : {props.client.phoneNum}
        </div>
        <div className='col'>
          car number : {props.client.carNum}
        </div>
      </div>
      <div style={showHistory ? { 'display': 'block' } : { 'display': 'None' }}>
      
      </div>
      {navToHome && <Navigate replace to="/" />}
    </div>
  )
}
