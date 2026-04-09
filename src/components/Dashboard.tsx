import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { PatientInfo } from "./PatientInfo";
import { VitalsTable } from "./VitalsTable";
import { BiometricsTable } from "./BiometricsTable";
import { ConditionsList } from "./ConditionsList";
import { MedicalBot } from "./MedicalBot";
import "./Dashboard.scss";
import { RightSidebar } from "./RightSidebar";

export const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

  // This component represents the "Home" view (Patient Summary)
  const PatientSummaryView = () => (
    <>
      <PatientInfo />
      <VitalsTable searchQuery={searchQuery} />
      <div className="content-grid">
        <BiometricsTable searchQuery={searchQuery} />
        <ConditionsList searchQuery={searchQuery} />
      </div>
    </>
  );

  return (
    <div className="dashboard">
      <Header 
        onSearch={setSearchQuery} 
        isRightSidebarOpen={isRightSidebarOpen}
        onToggleRightSidebar={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
      />

      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <Routes>
            {/* Home Route: Patient Summary */}
            <Route path="/" element={<PatientSummaryView />} />

            {/* Sub-routes (Example placeholders for now) */}
            <Route path="/vitals" element={<VitalsTable searchQuery={searchQuery} />} />
            <Route path="/conditions" element={<ConditionsList searchQuery={searchQuery} />} />
            
            {/* Catch-all for items not yet built */}
            <Route 
              path="*" 
              element={
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h3>Page Under Construction</h3>
                  <p>The clinical module for this page is under development.</p>
                </div>
              } 
            />
          </Routes>
        </main>
        {isRightSidebarOpen && <RightSidebar />}
      </div>
      <MedicalBot />
    </div>
  );
};