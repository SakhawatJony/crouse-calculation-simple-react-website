import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import Information from '../Information/Information';
import './Principal.css'

const Principal = () => {
    const [information,setInformation]=useState([]);
    const [infoAdd,setInfoAdd] = useState([]);

     useEffect(()=>{
       fetch('./principale.JSON')
       .then(res => res.json())
       .then(data=>setInformation(data))

    



     },[]);
     const handleAddToInfo =(deatails) =>{
       const newInfo = [...infoAdd, deatails]
       setInfoAdd(newInfo)
     
     };

    return (
        <div className="card-container">
            <div className="card">
           

            {
          information.map(info=> <Information 
            key={info.name}
            info={info}
            handleAddToInfo ={handleAddToInfo}

            ></Information>)

            }
           
            </div>

            <div className="total">
              <Info info={infoAdd}></Info>
            </div>

        </div>
    );
};

export default Principal;