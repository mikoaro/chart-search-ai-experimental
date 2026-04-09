import React, { useEffect, useState } from "react";
import { vitalsData } from "../lib/mockPatientData";
import "./VitalsTable.scss";
import { Analytics, Db2Database } from "@carbon/icons-react";

interface VitalsTableProps {
  searchQuery: string;
}

export const VitalsTable: React.FC<VitalsTableProps> = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = vitalsData.filter((vital) => {
    const search = searchQuery.toLowerCase();
    return (
      vital.dateTime.toLowerCase().includes(search) ||
      vital.bp.toLowerCase().includes(search) ||
      vital.temp.toString().includes(search)
    );
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const displayedData = filteredData.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-title-group">
          <h2 className="section-title">Vitals</h2>
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
              <th>Temp (DEG C)</th>
              <th>BP (mmHg)</th>
              <th>Pulse (beats/min)</th>
              <th>R. Rate (breaths/min)</th>
              <th>SpO2 (%)</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((vital, index) => (
                <tr
                  key={vital.id}
                  className={
                    index === 0 && searchQuery === "" ? "row-highlight" : ""
                  }
                >
                  <td className="date-cell">{vital.dateTime}</td>
                  <td>{vital.temp}</td>
                  <td>{vital.bp}</td>
                  <td
                    className={
                      typeof vital.pulse === "number" ? "" : "trend-down"
                    }
                  >
                    {vital.pulse}
                  </td>
                  <td>{vital.respiratoryRate}</td>
                  <td
                    className={
                      typeof vital.spO2 === "number" ? "" : "trend-down"
                    }
                  >
                    {vital.spO2}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    textAlign: "center",
                    padding: "2rem",
                    color: "#525252",
                  }}
                >
                  No vitals found matching "{searchQuery}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {filteredData.length > 0 && (
        <div className="table-footer">
          <div className="footer-info">
            <span>
              {startIdx + 1} -{" "}
              {Math.min(startIdx + itemsPerPage, filteredData.length)} of{" "}
              {filteredData.length} items
            </span>
            <a href="#" className="see-all-link">
              See all
            </a>
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
              {currentPage} of {totalPages || 1} pages
            </span>
            <button
              className="pagination-btn"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages || totalPages === 0}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
