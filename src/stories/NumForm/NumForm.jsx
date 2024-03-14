import React, { useState } from 'react';
import './numForm.css';
import { Button } from '../Button/Button.jsx'
import { NumTextInput } from '../NumTextInput/NumTextInput.jsx';
import { NumRadioButton } from '../NumRadioButton/NumRadioButton.jsx';

export const NumForm = ({className, onFormSubmit, id, nodData, ...props}) => {

    // 1-st question state
    const [textInput, setTextInput] = useState('');
    // 2-nd question state
    const [radioValue, setRadioValue] = useState('');
    // 3-th question state
    const [correspondenceUserAnswer, setCorrespondenceUserAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit({textInput, radioValue, correspondenceUserAnswer});
    };

    return (
        <form id={id} className={className} onSubmit={handleSubmit}>
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
