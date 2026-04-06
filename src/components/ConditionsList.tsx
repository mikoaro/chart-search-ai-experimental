import React from 'react';
import { conditionsData } from '../lib/mockPatientData';
import './ConditionsList.scss';

interface ConditionsProps {
  searchQuery: string;
}

export const ConditionsList: React.FC<ConditionsProps> = ({ searchQuery }) => {
  const filteredConditions = conditionsData.filter((item) =>
    item.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (  
    <div className="section conditions-section">
      <div className="section-header">
        <div className="section-title-group">
          <h2 className="section-title">Conditions</h2>
          <div className="section-meta">
            <span className="meta-label">Show:</span>
            <select className="meta-select">
              <option>Active</option>
              <option>Inactive</option>
              <option>All</option>
            </select>
          </div>
        </div>
        <div className="section-actions">
          <button className="action-btn">+ Add</button>
        </div>
      </div>

      <div className="conditions-list">
        <div className="conditions-header">
          <div className="header-col condition-name">Condition</div>
          <div className="header-col date-onset">Date of onset</div>
          <div className="header-col status">Status</div>
        </div>

        {filteredConditions.map((condition) => (
          <div key={condition.id} className="condition-row">
            <div className="col condition-name">{condition.condition}</div>
            <div className="col date-onset">{condition.dateOfOnset}</div>
            <div className="col status">
              <span className="status-badge">{condition.status}</span>
            </div>
            <button className="condition-menu" title="Options">⋮</button>
          </div>
        ))}
      </div>
    </div>
  );
};
