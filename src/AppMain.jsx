import React, { useState, useEffect } from 'react';
import { Button } from './stories/Button/Button.jsx';
import { NumTextInput } from './stories/NumTextInput/NumTextInput.jsx';
import { NumRadioButton } from './stories/NumRadioButton/NumRadioButton.jsx';
import { day, checkOdd } from "../utils/currentDay.js";

function AppMain() {
  const [nodData, setNodData] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [radioValue, setRadioValue] = useState('');

  const URL = `https://numod-20528-default-rtdb.europe-west1.firebasedatabase.app/${day}.json`;

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
  }, []);

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
            <NumTextInput
              id="textInput"
              type={"text"}
              name={"wordInput"}
              label={"Cловами"}
              placeholder={"Напиши число словами"}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              />
          </div>
          
          <div className="form-group">
            <div className="radio-group--inline">
              <NumRadioButton type="radio" name="options" label={"Четное"} value="even" checked={radioValue === 'even'} onChange={(value) => setRadioValue(value)} />
              <NumRadioButton type="radio" name="options" label={"Нечетное"} value="odd" checked={radioValue === 'odd'} onChange={(value) => setRadioValue(value)} />
            </div>
          </div>
          
          <div className="form-group">
            <Button type="submit" label={"Проверить"} primary={true}/>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AppMain;
