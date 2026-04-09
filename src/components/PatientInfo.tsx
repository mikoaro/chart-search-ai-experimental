import React from "react";
import { patientInfo, vitalsSummary } from "../lib/mockPatientData";
import "./PatientInfo.scss";
import { ArrowDown } from "@carbon/icons-react";

export const PatientInfo: React.FC = () => {
  return (
    <div className="patient-info-container">
      <div className="patient-header">
        <div className="patient-avatar">
          <span>
            {patientInfo.name.charAt(0)}
            {patientInfo.name.split(" ")[1].charAt(0)}
          </span>
        </div>
        <div className="patient-details">
          <h1 className="patient-name">
            {patientInfo.name}
            <span className="patient-gender"> ♂ {patientInfo.gender}</span>
            <span className="badge active-visit">
              {patientInfo.visitStatus}
            </span>
          </h1>

          <div className="patient-meta">
            <span className="patient-age">{patientInfo.age}</span>
            <span className="patient-separator">·</span>
            <span className="patient-date">{patientInfo.visitDate}</span>
            <span className="patient-separator">·</span>
            <span className="patient-id">
              OpenMRS ID: {patientInfo.openMrsId}
            </span>
          </div>
        </div>
      </div>
        
        <div className="profile-header">
          <h2 className="profile-title">Vitals and biometrics</h2>
          <span className="meta-text">02-Feb-2025, 12:45 PM</span>
          <span className="meta-badge">These vitals are 5 days old</span>
          <a href="#" className="meta-link">
            Vitals history
          </a>
        </div>
        
      <div className="vitals-summary">
        <div className="vital-card">
          <span className="vital-label">BP</span>
          <span className="vital-value">{vitalsSummary.bp}</span>
        </div>
        <div className="vital-card-heart">
          <div>
            <span className="vital-label">Heart rate</span>
          <ArrowDown className="arrow-icon" size={13} />
          </div>
          <span className="vital-value">{vitalsSummary.heartRate}</span>
        </div>
        <div className="vital-card">
          <span className="vital-label">R. rate</span>
          <span className="vital-value">{vitalsSummary.respiratoryRate}</span>
        </div>
        <div className="vital-card">
          <span className="vital-label">SpO2</span>
          <span className="vital-value">{vitalsSummary.spO2}</span>
        </div>
        <div className="vital-card">
          <span className="vital-label">Temp</span>
          <span className="vital-value">{vitalsSummary.temperature}</span>
        </div>
        <div className="vital-card">
          <span className="vital-label">Weight</span>
          <span className="vital-value">{vitalsSummary.weight}</span>
        </div>
        <div className="vital-card">
          <span className="vital-label">Height</span>
          <span className="vital-value">{vitalsSummary.height}</span>
        </div>
        <div className="vital-card">
          <span className="vital-label">BMI</span>
          <span className="vital-value">{vitalsSummary.bmi}</span>
        </div>
      </div>
    </div>
  );
};
