import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [nbState, setnbState] = useState("");
  const [totalState, setTotalState] = useState(0);

  const pickNbHandler = (nb) => {
    let textTotal = nbState.toString().concat(nb);
    console.log(textTotal);
    setnbState(textTotal);
  };

  const caculateHandler = () => {
    console.log(eval(nbState));
    eval(nbState);
    setTotalState(eval(nbState));
  };

  const resetHandler = () => {
    setnbState("");
    setTotalState(0);
  };

  const typeHandler = () => {
    setnbState(-nbState);
  };

  let result = <div className="Orange">result</div>;
  if (nbState) {
    result = nbState;
  }
  if (totalState) {
    result = totalState;
  }

  let classes = ["Row"];
  if (nbState.length > 5) {
    classes.push("Red");
  }

  return (
    <div className="App">
      <div className={classes.join(" ")}> {result}</div>
      <div className="Row">
        <div className="Orange" onClick={() => pickNbHandler(1)}>
          1
        </div>
        <div className="Orange" onClick={() => pickNbHandler(2)}>
          2
        </div>
        <div className="Orange" onClick={() => pickNbHandler(3)}>
          3
        </div>
        <div className="Orange" onClick={() => pickNbHandler(4)}>
          4
        </div>
      </div>
      <div className="Row">
        <div className="Orange" onClick={() => pickNbHandler(5)}>
          5
        </div>
        <div className="Orange" onClick={() => pickNbHandler(6)}>
          6
        </div>
        <div className="Orange" onClick={() => pickNbHandler(7)}>
          7
        </div>
        <div className="Orange" onClick={() => pickNbHandler(8)}>
          8
        </div>
      </div>
      <div className="Row">
        <div className="Orange" onClick={() => pickNbHandler(9)}>
          9
        </div>
        <div className="Orange" onClick={() => pickNbHandler(0)}>
          0
        </div>
        <div className="Orange" onClick={() => resetHandler()}>
          AC
        </div>
        <div className="Orange" onClick={() => pickNbHandler("+")}>
          +
        </div>
      </div>
      <div className="Row">
        <div className="Orange" onClick={() => caculateHandler("=")}>
          =
        </div>
        <div className="Orange" onClick={() => pickNbHandler("-")}>
          -
        </div>
        <div className="Orange" onClick={() => typeHandler("-")}>
          +/-
        </div>
        <div className="Orange" onClick={() => pickNbHandler("/")}>
          /
        </div>
      </div>
    </div>
  );
};

export default App;
