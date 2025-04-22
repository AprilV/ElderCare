import React, { useState, useEffect } from "react";
import "./HamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleHighContrast = () => setHighContrast(!highContrast);

  const [readableFonts, setReadableFonts] = useState(false);
  const toggleReadableFonts = () => setReadableFonts(!readableFonts);

  useEffect(() => {
    document.body.classList.toggle("readable-fonts-enabled", readableFonts);
  }, [readableFonts]);

  useEffect(() => {
    document.body.classList.toggle("large-text-enabled", largeText);
  }, [largeText]);

  useEffect(() => {
    document.body.classList.toggle("high-contrast-enabled", highContrast);
  }, [highContrast]);

  return (
    <>
      <button className="hamburger-btn" onClick={toggleMenu} aria-label="Menu">
        ☰
      </button>

      {isOpen && (
        <div className="hamburger-menu">
          <button
            className="close-btn"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            ×
          </button>
          <h2>Accessibility Settings</h2>

          <div className="accessibility-section">
            <h3>Text and Layout</h3>
            <label htmlFor="largeTextToggle">
              <input
                type="checkbox"
                id="largeTextToggle"
                checked={largeText}
                onChange={toggleLargeText}
              />
              Use large readable text and spacious layout
            </label>
          </div>

          <div className="accessibility-section">
            <h3>Color and Contrast</h3>
            <label htmlFor="highContrastToggle">
              <input
                type="checkbox"
                id="highContrastToggle"
                checked={highContrast}
                onChange={toggleHighContrast}
              />
              Enable high contrast mode for better visibility
            </label>
          </div>

          <div className="accessibility-section">
            <h3>Readable Fonts</h3>
            <label htmlFor="readableFontsToggle">
              <input
                type="checkbox"
                id="readableFontsToggle"
                checked={readableFonts}
                onChange={toggleReadableFonts}
              />
              Enable high-legibility fonts (Segoe UI, Arial, Verdana)
            </label>
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
              (auto-enables aria labels or future audio cues – toggle coming
              soon)
            </p>
          </div>

          <div className="accessibility-section">
            <h3>Audio Alerts</h3>
            <p className="placeholder">
              (enable simple sound notification for reminders – toggle coming
              soon)
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
