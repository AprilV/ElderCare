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

  const [keyboardNav, setKeyboardNav] = useState(false);
  const toggleKeyboardNav = () => setKeyboardNav(!keyboardNav);

  const [reduceMotion, setReduceMotion] = useState(false);
  const toggleReduceMotion = () => setReduceMotion(!reduceMotion);

  useEffect(() => {
    document.body.classList.toggle("reduce-motion-enabled", reduceMotion);
  }, [reduceMotion]);

  useEffect(() => {
    document.body.classList.toggle("keyboard-nav-enabled", keyboardNav);
  }, [keyboardNav]);

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
          <button
            className="close-btn"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            ×
          </button>

          <h2>Accessibility Settings</h2>

          <div className="accessibility-section">
            <div className="toggle-container">
              <h3>Text and Layout</h3>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={largeText}
                  onChange={toggleLargeText}
                />
                <span className="slider"></span>
              </label>
            </div>
            <p className="toggle-description">
              Increases font size throughout the app for easier reading.
            </p>
          </div>

          <div className="accessibility-section">
            <div className="toggle-container">
              <h3>Color and Contrast</h3>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={toggleHighContrast}
                />
                <span className="slider"></span>
              </label>
            </div>
            <p className="toggle-description">
              Switches to a bold color scheme to improve visibility.
            </p>
          </div>

          <div className="accessibility-section">
            <div className="toggle-container">
              <h3>Readable Fonts</h3>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={readableFonts}
                  onChange={toggleReadableFonts}
                />
                <span className="slider"></span>
              </label>
            </div>
            <p className="toggle-description">
              Changes to simpler, clearer fonts that are easier to read.
            </p>
          </div>

          <div className="accessibility-section">
            <div className="toggle-container">
              <h3>Keyboard Navigation</h3>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={keyboardNav}
                  onChange={toggleKeyboardNav}
                />
                <span className="slider"></span>
              </label>
            </div>
            <p className="toggle-description">
              Highlights where you are when using the Tab key.
            </p>
          </div>

          <div className="accessibility-section">
            <div className="toggle-container">
              <h3>Motion and Animation</h3>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={reduceMotion}
                  onChange={toggleReduceMotion}
                />
                <span className="slider"></span>
              </label>
            </div>
            <p className="toggle-description">
              Turns off animations to reduce distractions and motion sickness.
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
