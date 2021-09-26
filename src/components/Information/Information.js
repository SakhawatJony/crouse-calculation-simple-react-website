import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInfo } from '@fortawesome/free-solid-svg-icons';
import'./Information.css';


const Information = (props) => {
    const {name,degree,img,gmail,institute,salary} = props.info;
    const element = <FontAwesomeIcon icon={faInfo} />

    return (
        <div className="card-info">
            <img src={img} alt="" />
            <h4>Principal Name: {name}</h4>
            <p>Degree: {degree}</p>
            <p>Gmail: {gmail}</p>
            <p>sma {institute}</p>
            <h4>Principal Salary: {salary}</h4>
            <button 
            onClick={()=> props.handleAddToInfo(props.info)}
            className="btn-info"
            >{element}  Add To Info</button>
        </div>
    );
};

export default Information;