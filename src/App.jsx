import React, { useState } from 'react';
import Question from './components/Question';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [values, setValues] = useState([0, 0, 0]);
  const questions = [
    "I have ambitious aims of making a difference.",
    "My leadership journey has progressed as I anticipated.",
    "I have spent fewer than 4 years in full-time service or ministry."
  ];

  const handleSliderChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="App">
      <div className="header">
        <div className="tabs">
          {["IDEALISTIC", "DISILLUSIONED", "CYNICAL", "HOPEFUL"].map((section, index) => (
            <span key={section}>
              <ProgressBar progress={currentQuestion >= (index * (questions.length / 4)) ? 100 : 0} />
              <p style={currentQuestion >= (index * (questions.length / 4)) ? { fontWeight: 'bold' } : { color: 'black' }}>{section}</p>
            </span>
          ))}
        </div>
      </div>
      <div className="progress-indicator">
        {`${currentQuestion + 1}/${questions.length}`}
      </div>
      <Question
        question={questions[currentQuestion]}
        value={values[currentQuestion]}
        onChange={(newValue) => handleSliderChange(currentQuestion, newValue)}
      />
      <div className="navigation">
        {currentQuestion > 0 && <button className="prev" onClick={() => setCurrentQuestion(currentQuestion - 1)}>← PREV</button>}
        {currentQuestion < questions.length - 1 && <button className="next" onClick={() => setCurrentQuestion(currentQuestion + 1)}>NEXT →</button>}
      </div>
    </div>
  );
}

export default App;
