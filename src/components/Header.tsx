import React from 'react';
import './Header.scss';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">🏥</span>
          <span className="logo-text">OpenMRS</span>
        </div>

        <div>
          <span className=''></span>
        </div>
      </div>

      <div className="header-center">
        <div className="search-box">
          <input
            type="text"
            placeholder="Show me a trend of the viral load over the past 2 years."
            className="search-input"
            onChange={handleSearch}
          />
          <button className="search-btn" title="Search">
            🔍
          </button>
        </div>
      </div>

      <div className="header-right">
        <button className="header-btn">End visit</button>
        <button className="header-btn close-btn" title="Close">
          ✕
        </button>
      </div>
    </header>
  );
};
