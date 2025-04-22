import React, { useState, useEffect } from "react";
import "./HamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [readableFonts, setReadableFonts] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleReadableFonts = () => setReadableFonts(!readableFonts);

  useEffect(() => {
    document.body.classList.toggle("large-text-enabled", largeText);
  }, [largeText]);

  useEffect(() => {
    document.body.classList.toggle("high-contrast-enabled", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.body.classList.toggle("readable-fonts-enabled", readableFonts);
  }, [readableFonts]);

  return (
    <>
      <button className="hamburger-btn" onClick={toggleMenu} aria-label="Menu">
        ☰
      </button>

      {isOpen && (
        <div className="hamburger-menu">
          <button className="close-btn" onClick={toggleMenu} aria-label="Close Menu">
            ×
          </button>
          <h2>Accessibility Settings</h2>

          <div className="accessibility-section">
            <h3>Text and Layout</h3>
            <div className="toggle-container">
              <span>Use large readable text</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={largeText}
                  onChange={toggleLargeText}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="accessibility-section">
            <h3>Color and Contrast</h3>
            <div className="toggle-container">
              <span>Enable high contrast</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={toggleHighContrast}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="accessibility-section">
            <h3>Readable Fonts</h3>
            <div className="toggle-container">
              <span>Use high-legibility fonts</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={readableFonts}
                  onChange={toggleReadableFonts}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="accessibility-section">
            <h3>Keyboard Navigation</h3>
            <p className="placeholder">(toggle coming soon)</p>
          </div>

          <div className="accessibility-section">
            <h3>Motion and Animation</h3>
            <p className="placeholder">(toggle coming soon)</p>
          </div>

          <div className="accessibility-section">
            <h3>Screen Reader Mode</h3>
            <p className="placeholder">
              (auto-enables aria labels or future audio cues – toggle coming soon)
            </p>
          </div>

          <div className="accessibility-section">
            <h3>Audio Alerts</h3>
            <p className="placeholder">
              (enable simple sound notification for reminders – toggle coming soon)
            </p>
          </div>

          <div className="accessibility-section">
            <h3>Voice Input</h3>
            <p className="placeholder">
              (voice-to-text for message fields – if time permits)
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
