import { useState } from "react";
import Pagination from "./pagination/Pagination";
import Content from "./Content";

const App = () => {
  // fake data as a list of objects
  let data = [];
  for (let i = 0; i < 300; i++) {
    data.push("lorem no " + (i + 1));
  }
  const [visibleData, setVisibleData] = useState(data);
  // pass visible data to your components

  return (
    <div>
      <Content data={visibleData} />
      <Pagination data={data} setVisibleData={setVisibleData} />
    </div>
  );
};

export default App;
