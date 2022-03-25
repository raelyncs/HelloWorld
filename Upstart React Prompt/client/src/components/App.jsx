import React, { useEffect, useState } from 'react';

const styles = {
  first: {
    color: "#ADD8E6",
    fontFamily: "Helvetica"
  },
  second: {
    color: "#ADD8E6",
    fontFamily: "Comicsansms"
  },
  third: {
    color: "#ADD8E6",
    fontFamily: "Times New Roman"
  }
}

const App = () => {

  const [displayStyle, setDisplayStyle] = useState("first");
  let count = 1;

  useEffect(() => {
    setInterval(changeColor, 1000);
  }, [])

  function changeColor() {

    count++;

    if (count === 1) {
      setDisplayStyle("first");
      count = 1;
    } else if (count === 2) {
      setDisplayStyle("second")
    } else if (count === 3) {
      setDisplayStyle("third")
    } else {
      setDisplayStyle("first");
      count = 1;
    }

  }


  return (

    <div>
      <h1 style={{ backgroundColor: "black" }}>
        <span style={{ color: "gray" }}>H</span>
        <span style={{ color: "white" }}>ello</span>
        <span id="js_world" style={styles[displayStyle]}> World</span>
      </h1>
    </div >
  )
}

export default App;