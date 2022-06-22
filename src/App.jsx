import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import CallList from "./components/CallList/CallList.jsx";
import BottomTray from "./components/BottomTray/BottomTray.jsx";
import axios from "axios";

const App = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    axios
      .get("https://aircall-job.herokuapp.com/activities")
      .then(({ data }) => setCalls(data))
      .catch((err) => console.log(`Error occurred: ${err}`));
  }, []);

  return (
    <div className="container">
      <Header />
      <CallList data={calls} />
      <BottomTray />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
