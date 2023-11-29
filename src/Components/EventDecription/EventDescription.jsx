import React, { useState } from 'react';
import './EventDescription.css';

const EventDescription = () => {
  const [description, setDescription] = useState('');
  const [theme, setTheme] = useState('light');
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default to black
  const [selectedFont, setSelectedFont] = useState('Arial');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  return (
    <div className={`event-description-card ${theme}`}>
      <div className="event-description-container">
        <div className="description-part">
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ fontFamily: selectedFont }}
          />
        </div>
        <div className="theme-part">
          <label>Theme:</label>
          <select value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="style-part">
          <label>Color:</label>
          <input type="color" value={selectedColor} onChange={handleColorChange} />

          <label>Font:</label>
          <select value={selectedFont} onChange={handleFontChange}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            {/* Add more font options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
