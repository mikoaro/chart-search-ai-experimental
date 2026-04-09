import React from "react";
import "./Header.scss";
import { ChatBot, SendAlt, Close, Star, Search, HealthCross, Hospital } from "@carbon/icons-react";

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
          <span className="logo-icon"><Hospital size={24} /></span>
          <span className="logo-text">OpenMRS</span>
        </div>

        <div className="header-separator">
          <span className="header-name">George Anderson</span>
          <span className="header-details">12yrs, 4mths, Male</span>
        </div>
      </div>

      <div className="header-center">
         
        <div className="search-box">
          <span className="search-icon">
            <Search />
          </span>
          
          <input
            type="text"
            placeholder="Show me a trend of the viral load over the past 2 years."
            className="search-input"
            onChange={handleSearch}
          />
         
          <button className="search-btn" title="Search">
            <Star />
          </button>
        </div>
      </div>

      <div className="header-right">
        <button className="header-btn"><span>End visit</span></button>
        <button className="close-btn" title="Close">
          ✕
        </button>
      </div>
    </header>
  );
};
