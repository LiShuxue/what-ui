import React from "react";
import "./App.scss";
import { Button } from "./components";

const App: React.FC = () => {
  const clickButton = () => {
    console.log("button clicked...");
  };

  return (
    <div className="App">
      <Button type="default" onClick={clickButton}>
         default
      </Button>
      <Button type="primary" onClick={clickButton}>
         primary
      </Button>
      <Button type="danger" onClick={clickButton}>
         andger
      </Button>
      <hr />
      <Button size="small" onClick={clickButton}>
         small
      </Button>
      <Button size="medium" onClick={clickButton}>
         medium
      </Button>
      <Button size="large" onClick={clickButton}>
         large
      </Button>
      <hr />
      <Button className="test" onClick={clickButton}>
         自定义class
      </Button>
      <Button style={{backgroundColor: 'green'}} onClick={clickButton}>
         自定义style
      </Button>
      <hr />
      <Button disabled={true} onClick={clickButton}>
         disabled
      </Button>
    </div>
  );
};

export default App;
