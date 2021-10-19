import React from 'react';
import './App.css';

function App() {

  const appID = process.env.REACT_APP_VK_APP_ID;
  const apiVer = process.env.REACT_APP_VK_APP_VER;
  const apiKey = process.env.REACT_APP_VK_SERVICE_KEY;
  const ownerID = process.env.REACT_APP_VK_OWNER_ID;

  const apiUrl = `/method/wall.get?owner_id=-${ownerID}&count=1&access_token=${apiKey}&v=${apiVer}`;

  fetch(apiUrl,{
    method: 'GET'
})
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
        },
        (error) => {
            console.log("Ошибка при получении данных...")
        }
    )

  return (
    <div className="App">
    </div>
  );
}

export default App;

