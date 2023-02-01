import React, { useState } from "react";

function TestPage2() {
  const [data, setData] = useState(); //save the state
  const [print, setPrint] = useState(false); //print the data

  //handle the user inputs

  function getData(val) {
    setData(val.target.value); //track what the user writes
    console.log(val.target.values);
    setPrint(false);
  }

  return (
    <div>
      <input placeholder="username" onChange={getData} />
      <br />
      {/* print using the button */}
      <button
        onClick={() => {
          setPrint(true);
        }}
      >
        print
      </button>
      {print ? <h1>{data}</h1> : null}
    </div>
  );
}

export default TestPage2;
