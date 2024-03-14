import React, { useState, useEffect } from 'react';
import useMobileCheck from './hooks/useMobileCheck.js';
import { Button } from './stories/Button/Button.jsx';
import { NumTextInput } from './stories/NumTextInput/NumTextInput.jsx';
import { NumRadioButton } from './stories/NumRadioButton/NumRadioButton.jsx';
import { NumCard } from './stories/NumCard/NumCard.jsx';
import { day, checkOdd, checkCorrespondence } from "../utils/index.js";

function AppMain() {
  const [nodData, setNodData] = useState(null);

  const isMobile = useMobileCheck();
  const [isCardBackSide, setIsCardBackSide] = useState(false);

  // 1-st question state
  const [textInput, setTextInput] = useState('');
  // 2-nd question state
  const [radioValue, setRadioValue] = useState('');
  // 3-th question state
  const [correspondenceUserAnswer, setCorrespondenceUserAnswer] = useState('');

  const dbUrl = import.meta.env.VITE_DB_URL;
  const URL = `${dbUrl}/${day}.json`;

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

    const isWordsQuestionValid = nodData.wordsRu.includes(textInput.toLowerCase().trim());
    const isEvenQuestionValid = radioValue === checkOdd(nodData.value);
    const isCorrespondenceValid = checkCorrespondence(correspondenceUserAnswer, nodData.correspondence);


    // Проверка ответа пользователя
    if (isWordsQuestionValid && isEvenQuestionValid && isCorrespondenceValid) {
      alert('Верно!');
    } else {
      alert('Неверно!');
    }
  }

  return (
    <main className="app-main" id="app">
      {
        isMobile && (
          <NumCard
          title={nodData?.value.toString()}
          subtitle={'число дня'}
          isHeaderButton={true}
          headerButtonHandler={() => setIsCardBackSide(!isCardBackSide)}
        >
          {
            isCardBackSide ? (
                nodData?.infoRu?.map((txt, idx)=> {
                  return <p key={`p-${idx}`}>{txt}</p>
                })
            ) : (
              <form id="myForm" className="quiz-form" onSubmit={handleSubmit}>
              {/* 1-rd question */}
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
              
              {/* 2-rd question */}
              <div className="form-group">
              <div className='label-text'>Какое это число?</div>
                <div className="radio-group--inline">
                  <NumRadioButton
                    name="even-option"
                    label={"Четное"}
                    value="even"
                    checked={radioValue === 'even'}
                    onChange={(value) => setRadioValue(value)}
                  />
                  <NumRadioButton
                    name="odd-option"
                    label={"Нечетное"}
                    value="odd"
                    checked={radioValue === 'odd'}
                    onChange={(value) => setRadioValue(value)}
                  />
                </div>
              </div>
    
              {/* 3-rd question */}
              {
                nodData?.correspondence && (
                  <div className='form-group'>
                    <div className='label-text'>К какому из следующих описаний число подходит лучше всего?</div>
                    {nodData.correspondence.map(({value, description}) => {
                      return (
                        <NumRadioButton
                          key={value}
                          name={`value-option-${value}`}
                          label={description}
                          value={value}
                          checked={correspondenceUserAnswer === value}
                          onChange={(value) => setCorrespondenceUserAnswer(value)}
                        />
                      );
                    })}
                  </div>
                )
              }
              <div className="form-group">
                <Button type="submit" label={"Проверить"} primary={true}/>
              </div>
            </form>
            )
          }
        </NumCard>
        )
      }
        
      {
        !isMobile && (
          <>
           <NumCard
            className={'num-card-custom'}
            title={nodData?.value.toString()}
            subtitle={'число дня'}
          >
              <div className="form-container">
          <form id="myForm" className="quiz-form" onSubmit={handleSubmit}>
            {/* 1-rd question */}
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
            
            {/* 2-rd question */}
            <div className="form-group">
            <div className='label-text'>Какое это число?</div>
              <div className="radio-group--inline">
                <NumRadioButton
                  name="even-option"
                  label={"Четное"}
                  value="even"
                  checked={radioValue === 'even'}
                  onChange={(value) => setRadioValue(value)}
                />
                <NumRadioButton
                  name="odd-option"
                  label={"Нечетное"}
                  value="odd"
                  checked={radioValue === 'odd'}
                  onChange={(value) => setRadioValue(value)}
                />
              </div>
            </div>
  
            {/* 3-rd question */}
            {
              nodData?.correspondence && (
                <div className='form-group'>
                  <div className='label-text'>К какому из следующих описаний число подходит лучше всего?</div>
                  {nodData.correspondence.map(({value, description}) => {
                    return (
                      <NumRadioButton
                        key={value}
                        name={`value-option-${value}`}
                        label={description}
                        value={value}
                        checked={correspondenceUserAnswer === value}
                        onChange={(value) => setCorrespondenceUserAnswer(value)}
                      />
                    );
                  })}
                </div>
              )
            }
            <div className="form-group">
              <Button type="submit" label={"Проверить"} primary={true}/>
            </div>
          </form>
        </div>
          </NumCard>

           <div className='info-container'>
            {
              nodData?.infoRu?.map((txt, idx)=> {
                return <p key={`p-${idx}`}>{txt}</p>
              })
            }
            </div>
        </>
        )
      }
    
    </main>
  );
}

export default AppMain;
