import React from 'react';
import './Sidebar.scss';

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
}

const sidebarItems: SidebarItem[] = [
  { id: 'patient-summary', label: 'Patient summary', icon: '📋' },
  { id: 'vitals', label: 'Vitals & Biometrics', icon: '📊' },
  { id: 'medications', label: 'Medications', icon: '💊' },
  { id: 'orders', label: 'Orders', icon: '📦' },
  { id: 'results', label: 'Results', icon: '✓' },
  { id: 'visits', label: 'Visits', icon: '🏥' },
  { id: 'allergies', label: 'Allergies', icon: '⚠' },
  { id: 'conditions', label: 'Conditions', icon: '🔍' },
  { id: 'immunizations', label: 'Immunizations', icon: '💉' },
  { id: 'attachments', label: 'Attachments', icon: '📎' },
  { id: 'programs', label: 'Programs', icon: '📈' },
  { id: 'appointments', label: 'Appointments', icon: '📅' },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            className="sidebar-item"
            title={item.label}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};
