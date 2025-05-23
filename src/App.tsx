import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // @ts-expect-error: Telegram WebApp is injected globally
    if (window.Telegram && window.Telegram.WebApp) {
      // @ts-expect-error: Telegram WebApp is injected globally
      const tg = window.Telegram.WebApp.initDataUnsafe;
      if (tg && tg.user) {
        setData(tg);
      } else {
        console.warn("initData is empty or missing user information.");
      }
    } else {
      console.warn("Telegram WebApp is not available.");
    }
  }, []);

  return (
    <>
      {/* @ts-expect-error: Telegram WebApp is injected globally */}
      <div>{!data ? "Loading..." : `Hello ${data.user.first_name}`}</div>
    </>
  );
}
