import './IndexPage.css';
import React, { useState } from "react";

import { Link } from "react-router-dom";


const IndexPage = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  let searchedValue = value.toLowerCase().split(" ").join("+");
  // console.log(searchedValue);

  return (
    <div className='homepage'>
      <h1 className='weatherHeader'>Weather Api</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Location"
      />
      <br/>
      
      <Link to={`/weather/${searchedValue}`}>
        <button className='searchBtn'>Search</button>
      </Link>
    </div>
  );
};

export default IndexPage;
