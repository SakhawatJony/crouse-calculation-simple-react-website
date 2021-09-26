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
            <h3>Total Information Deatails</h3>
              <h5>Total Information:{props.info.length}</h5>
              <p>Total Salary :{total}</p>
        </div>
    );
};

export default Info;