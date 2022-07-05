import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router';

export default function (props) {

    const [navToSignup, setnavToSignup] = useState(false)
    const [checkedId, setCheckedId] = useState(true)
    const [navToClientPage, setnavToClientPage] = useState(false)

    const idClick = () =>{
        document.getElementById("CarNumInp").checked = false;
        setCheckedId(true);
    }
    const carNumClick = () =>{
        document.getElementById("idInp").checked = false;
        setCheckedId(false);
    }
    const handleChange = (e) =>{
        props.setclientLogIn(props.clients[e.target.value]);
        setnavToClientPage(true);
    }
  return (
    <div>
        <h1 className='titel'>Garage</h1>
        <div className='home'>
        <button onClick={()=>{setnavToSignup(!navToSignup)}} className='NewUser'>New User</button><br />
            <br /><select id='selectStyle' onChange={handleChange} className="select" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled >Select customer</option>
            {
                        props.clients.map((client,i)=>{
                            return <option key={i} value={i}>{checkedId ? client.id : client.carNum}</option>
                        })
                    }
            </select><br></br>
            <br /><h1 style={{'fontSize':'25px'}}>Select search options ↓</h1>
            <br /><label className='radioLabel'>id</label><input checked={checkedId} onClick={idClick} type="radio"  id ='idInp' className='radioinp' value='id'/>
            <label className='radioLabel'>car number</label><input onClick={carNumClick} type="radio" id ='CarNumInp' className='radioinp' value='car number'/>
        </div>
        {navToSignup && <Navigate replace to="/SignUp"/>}
        {navToClientPage && <Navigate replace to={props.getClientLink()}/>}
    </div>
  )
}
