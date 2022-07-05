import React, { useState } from 'react'
import swal from 'sweetalert';
import { Navigate } from 'react-router';

export default function (props) {
    const [newUserName, setnewUserName] = useState('')
    const [newId, setnewId] = useState('')
    const [newAddress, setnewAddress] = useState('')
    const [newPhoneNum, setnewPhoneNum] = useState('')
    const [newCaNum, setnewCaNum] = useState('')

    const [navToHome, setnavToHome] = useState(false)


    const checkUserName = (event) => {
        let name = event.target.value;
        if (isNaN(name)) {
            setnewUserName(name)
        }
    }
    const checknewId= (event) => {
        let id = event.target.value;
        if (!isNaN(id) && id.length === 9) {
            setnewId(id)
        }
    }
    const checnewPhoneNum= (event) => {
        let Phone = event.target.value;
        if (!isNaN(Phone) && Phone.length > 6) {
            setnewPhoneNum(Phone)
        }
    }
    const checnewCaNum= (event) => {
        let CaNum = event.target.value;
        if (!isNaN(CaNum)) {
            setnewCaNum(CaNum)
        }
    }
const add = () => {
    if(newUserName != '' && newId != '' && newAddress != '' && newPhoneNum != '' && newCaNum != ''){
        props.getNewUsers(newUserName, newId, newAddress, newPhoneNum, newCaNum)
        swal("Successfully!", "Account successfully added!", "success");
        setnavToHome(true)

    }
}

    return (
        <div>
            <h1>New User</h1>
            <input type="text" placeholder='full Name' onChange={checkUserName} className='inputStyle' /><br />
            <br /><input type="number" maxLength = '9' placeholder='id' onChange={checknewId} className='inputStyle' /><br />
            <br /><input type="text" placeholder='enter adders' onChange={event => setnewAddress(event.target.value)} className='inputStyle' /><br />
            <br /><input type="number" placeholder='pohon number' onChange={checnewPhoneNum} className='inputStyle' /><br />
            <br /><input type="text" placeholder='cer number' onChange={checnewCaNum} className='inputStyle' /><br />
            <br /><button onClick={add} className='add'>Add</button>

            {navToHome && <Navigate replace to="/"/>}
        </div>
    )
}
