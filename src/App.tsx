import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // @ts-expect-error: Telegram WebApp is injected globally
  const tg = window.Telegram.WebApp;

  const [data, setData] = useState();

  useEffect(() => {
    if (tg.initDataUnsafe.user) {
      setData(tg.initDataUnsafe.user);
    }
  }, []);

  return (
    <>
      <div>
        {data ? (
          <table>
            <thead>
              <tr>
                <th>Поле</th>
                <th>Значение</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{JSON.stringify(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Загрузка данных пользователя или информация недоступна.</p>
        )}
      </div>
    </>
  );
}

export default App;
