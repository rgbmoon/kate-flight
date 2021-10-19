import React from 'react';
import './App.css';

function App() {

  const apiUrl = '/method/users.get?user_id=210700286&v=5.52';

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

