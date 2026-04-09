import React from "react";
import "./Header.scss";
import { Close, SidePanelOpen, Star, Search, Hospital } from "@carbon/icons-react";

interface HeaderProps {
  onSearch?: (query: string) => void;
  isRightSidebarOpen: boolean;
  onToggleRightSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, isRightSidebarOpen, 
  onToggleRightSidebar }) => {
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
               <Star />
          </span>
          
          <input
            type="text"
            placeholder="Show me a trend of the viral load over the past 2 years."
            className="search-input"
            onChange={handleSearch}
          />
         
          <button className="search-btn" title="Search">
          <Search />
          </button>
        </div>
      </div>

      <div className="header-right">
        <button className="header-btn"><span>End visit</span></button>
        <button 
          className={`close-btn ${!isRightSidebarOpen ? 'is-closed' : ''}`} 
          title={isRightSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          onClick={onToggleRightSidebar}
        >
          {isRightSidebarOpen ? (
            <Close size={15} />
          ) : (
            <SidePanelOpen size={15} />
          )}
        </button>
      </div>
    </header>
  );
};
