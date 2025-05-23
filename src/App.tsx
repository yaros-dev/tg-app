import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // @ts-expect-error: Telegram WebApp is injected globally
  const tg = window.Telegram.WebApp.initDataUnsafe.user;

  const [data, setData] = useState();

  useEffect(() => {
    if (tg) {
      setData(tg);
    }
  }, []);

  return (
    <>
      <div>{data ? data : "Loading..."}</div>
    </>
  );
}

export default App;
