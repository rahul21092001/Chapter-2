import React from "react";

const Namelist = ({ names }) => {
  return (
    <div>
    <hr/>
      <h2>List of Names</h2>

      {/* inline style in react */}
      <ul style={{display:'flex', flexDirection:'row',justifyContent:'space-around '}}>   

        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    <hr/>
    </div>
  );
};

export default Namelist;
