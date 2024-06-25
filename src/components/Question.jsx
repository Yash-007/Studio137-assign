import React, { useState, useEffect, useRef } from 'react';
import ReactSlider from 'react-slider';
import './Question.css';

const Question = ({ question, value, onChange }) => {
  const [sliderValue, setSliderValue] = useState(value);
  const sliderRef = useRef(null);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(sliderValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [sliderValue, onChange]);

  const handleLabelClick = (val) => {
    if (sliderRef.current) {
      sliderRef.current.slider.value = val;
      setSliderValue(val);
    }
  };

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div className="question-container">
      <h3 className="question-text">{question}</h3>
      <ReactSlider
        ref={sliderRef}
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={sliderValue}
        min={0}
        max={10}
        disabled
        onChange={handleSliderChange}
      />
      <div className="slider-labels">
        <span className="react-slider-label" onClick={() => handleLabelClick(0)}>Strongly Disagree</span>
        <span className="react-slider-label" onClick={() => handleLabelClick(2.5)}>Disagree</span>
        <span className="react-slider-label" onClick={() => handleLabelClick(5)}>Neutral</span>
        <span className="react-slider-label" onClick={() => handleLabelClick(7)}>Agree</span>
        <span className="react-slider-label" onClick={() => handleLabelClick(10)}>Strongly Agree</span>
      </div>
    </div>
  );
};

export default Question;
