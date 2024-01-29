import { useState } from "react";
import "./App.css";
import Dashboard from "./Component/DashBoard";
import { mockTransactions, mockGeographyData } from "./Data/MockData,js";

function App() {
  const [data, setData] = useState(mockTransactions);
  const [display, setDisplay] = useState(mockGeographyData);

  return (
    <>
      <Dashboard
        setData={setData}
        data={data}
        display={display}
        setDisplay={setDisplay}
      />
    </>
  );
}

export default App;
