import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // @ts-ignore
  const tg = window.Telegram.WebApp;

  const [data, setData] = useState();

  useEffect(() => {
    if (tg.initDataUnsafe.user) {
      setData(tg.initDataUnsafe.user);
    }
  }, []);

  return (
    <>
      <div>{data ? data : "Loading..."}</div>
    </>
  );
}

export default App;
