import React, { useState } from "react";
import { biometricsData } from "../lib/mockPatientData";
import "./BiometricsTable.scss";
import { Analytics, Db2Database } from "@carbon/icons-react";

interface BiometricsProps {
  searchQuery: string;
}

export const BiometricsTable: React.FC<BiometricsProps> = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 1. Filter the data first
  const filteredData = biometricsData.filter(
    (item) =>
      item.dateTime.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.weight.toString().includes(searchQuery) ||
      item.height.toString().includes(searchQuery),
  );

  // 2. Base pagination on the FILTERED data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const displayedData = filteredData.slice(startIdx, startIdx + itemsPerPage);

  // Reset to page 1 if search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="section biometrics-section">
      <div className="section-header">
        <div className="section-title-group">
          <h2 className="section-title">Biometrics</h2>
        </div>
        <div className="section-actions">
          <button className="icon-btn-data"><Db2Database /></button>
          <button className="icon-btn"><Analytics /></button>
          <button className="action-btn">Add +</button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date and time</th>
              <th>Weight (kg)</th>
              <th>Height (cm)</th>
              <th>BMI (kg / m²)</th>
              <th>MUAC (cm)</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((biometric) => (
                <tr key={biometric.id}>
                  <td className="date-cell">{biometric.dateTime}</td>
                  <td>{biometric.weight}</td>
                  <td>{biometric.height}</td>
                  <td>{biometric.bmi}</td>
                  <td>{biometric.muac}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="footer-info">
          <span>
            {startIdx + 1} / {biometricsData.length} items
          </span>
        </div>
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            ←
          </button>
          <span className="pagination-info">
            {currentPage} of {totalPages} pages
          </span>
          <button
            className="pagination-btn"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
