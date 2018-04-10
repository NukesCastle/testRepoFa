import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Hello2 from "./Hello2";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    {false ? <Hello name="CodeSandbox" /> : <Hello2 name="CodeSandbox" />}
    <h2> adafsadStart editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
