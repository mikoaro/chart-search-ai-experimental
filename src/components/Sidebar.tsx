import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Sidebar.scss";
import { 
  Activity, 
  Warning, 
  HealthCross,
  ShoppingCart,
  ListChecked,
  CalendarHeatMap,
  EventSchedule,
  Medication,
  Report,
  ChartCombo,
  DocumentAttachment,
  IbmLpa
} from "@carbon/icons-react";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string; // Added path property
}

const sidebarItems: SidebarItem[] = [
  // Patient summary is the root route
  { id: "patient-summary", label: "Patient summary", icon: Report, path: "/" },
  { id: "vitals", label: "Vitals & Biometrics", icon: Activity, path: "/vitals" },
  { id: "medications", label: "Medications", icon: Medication, path: "/medications" },
  { id: "orders", label: "Orders", icon: ShoppingCart, path: "/orders" },
  { id: "results", label: "Results", icon: ChartCombo, path: "/results" },
  { id: "visits", label: "Visits", icon: CalendarHeatMap, path: "/visits" },
  { id: "allergies", label: "Allergies", icon: Warning, path: "/allergies" },
  { id: "conditions", label: "Conditions", icon: ListChecked, path: "/conditions" },
  { id: "immunizations", label: "Immunizations", icon: HealthCross, path: "/immunizations" },
  { id: "attachments", label: "Attachments", icon: DocumentAttachment, path: "/attachments" },
  { id: "programs", label: "Programs", icon: IbmLpa, path: "/programs" },
  { id: "appointments", label: "Appointments", icon: EventSchedule, path: "/appointments" },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-content">
        {sidebarItems.map((item) => {
          const Icon = item.icon; 
          
          return (
            <NavLink 
              key={item.id} 
              to={item.path} 
              // 'end' ensures the root '/' isn't always highlighted
              end={item.path === "/"} 
              className={({ isActive }) => 
                `sidebar-item ${isActive ? "active" : ""}`
              }
              title={item.label}
            >
              <span className="sidebar-icon">
                <Icon size={20} />
              </span>
              <span className="sidebar-label">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};