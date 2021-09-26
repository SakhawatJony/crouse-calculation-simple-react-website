import React from 'react';
import './info.css';

const Info = (props) => {
  const {info} = props;
  let total= 0;
  for(const details of info){
total = total + details.salary;
  }

  
    return (
        <div className="info">
            
            <h4>Total Information Deatails</h4>
              <h5>Total Information:{props.info.length}</h5>
              <h6>Total Salary :{total}</h6>
              {
                info.map(singleInfo=><li key={singleInfo.name} >{singleInfo.name}</li>)
            }
        </div>
    );
};

export default Info;