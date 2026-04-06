import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { PatientInfo } from './PatientInfo';
import { VitalsTable } from './VitalsTable';
import { BiometricsTable } from './BiometricsTable';
import { ConditionsList } from './ConditionsList';
import './Dashboard.scss';
import { MedicalBot } from './MedicalBot';

export const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="dashboard">
      {/* Pass the setter to the Header */}
      <Header onSearch={setSearchQuery} /> 
      
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <PatientInfo />
          
          {/* Pass the query to the tables */}
          <VitalsTable searchQuery={searchQuery} />
          
          <div className="content-grid">
            <BiometricsTable searchQuery={searchQuery} />
            <ConditionsList searchQuery={searchQuery} />
          </div>
        </main>
      </div>
      <MedicalBot />
    </div>
  );
};
