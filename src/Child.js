import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, removeUsername, setUsername } from './features/trySlice';
import SubChild from './SubChild';

function Child() {

    const data = useSelector((state) => state.show.value);
    const dispatch = useDispatch();
    const [user, setUser] = useState('');

    const handleSetUsername = () =>{
        dispatch(setUsername(user));
    }

    const handleRemoveUsername = () => {
        dispatch(removeUsername());
    }

    return (
        <>
            <div className='design mb-5 mx-auto px-5 mr-5'>
                <div className='mb-5 mt-3'>
                <h4>Child Component</h4>
                <span>Data is Incrementing : {data } </span><br/>
                <button className='btn btn-danger btn-sm mb-4' onClick={() => dispatch(increment())}>Click to Increment</button><br/>
                
                <input placeholder='Enter Username...' className='form-control' type='text' value={user} onChange={(e)=>setUser(e.target.value)}/>
                <div className='d-flex justify-content-center mt-2'>
                    <button className='btn btn-primary btn-sm mx-2' onClick={handleSetUsername}>SetUsername</button>
                    <button className='btn btn-warning btn-sm' onClick={handleRemoveUsername}>removeUsername</button>
                </div>
                </div>
            </div>
            <SubChild/>
        </>
    );
}

export default Child;