import React, { useState, useEffect } from 'react';
import { day, checkOdd } from "../utils/currentDay.js";

function AppMain() {
  const [nodData, setNodData] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [radioValue, setRadioValue] = useState('');

  const URL = `https://numod-20528-default-rtdb.europe-west1.firebasedatabase.app/nums/${day}.json`;

  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => setNodData(data))
    .catch(error => console.error("Error fetching data: ", error));
  }, [URL]);

  function handleSubmit(event) {
    event.preventDefault();

    // Валидация
    if (!textInput || !radioValue) {
      alert('Заполните все поля.');
      return;
    }

    // Проверка ответа пользователя
    if (textInput.toLowerCase() === nodData.ru_words && radioValue === checkOdd(nodData.value)) {
      alert('Верно!');
    } else {
      alert('Неверно!');
    }
  }

  return (
    <main className="app-main" id="app">
      <div className="app-nod-container">
        <h2 id="data-container" className="nod">{nodData ? nodData.value : ''}</h2>
        <h1 className="site-heading">Число дня</h1>
      </div>
  
      <div className="form-container">
        <form id="myForm" className="quiz-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="textInput">Словами</label>
            <input type="text" id="textInput" name="textInput" required value={textInput} onChange={(e) => setTextInput(e.target.value)} />
          </div>
          
          <div className="form-group">
            <div className="radio-inline">
              <label>
                <input type="radio" name="options" value="even" required checked={radioValue === 'even'} onChange={(e) => setRadioValue(e.target.value)} /> Четное
              </label>
            </div>
            <div className="radio-inline">
              <label>
                <input type="radio" name="options" value="odd" required checked={radioValue === 'odd'} onChange={(e) => setRadioValue(e.target.value)} /> Нечетное
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <button type="submit" className="form-submit">Проверить</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AppMain;
