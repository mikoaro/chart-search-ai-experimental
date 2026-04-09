import React from 'react';
import { 
  ShoppingCart, 
  Edit, 
  Document, 
  Help, 
  Events
} from '@carbon/icons-react';
import './RightSidebar.scss';

export const RightSidebar: React.FC = () => {
  return (
    <aside className="right-sidebar">
      <div className="action-group top">
        {/* <button className="right-sidebar-item actions-trigger" title="Actions">
          <span className="label-text">Actions</span>
          <OverflowMenuVertical size={20} />
        </button> */}
        
        <button className="right-sidebar-item" title="Cart">
          <ShoppingCart size={20} />
        </button>

        <button className="right-sidebar-item" title="Edit">
          <Edit size={20} />
        </button>

        <button className="right-sidebar-item" title="Records">
          <Document size={20} />
        </button>

        <button className="right-sidebar-item" title="People">
          <Events size={20} />
        </button>
      </div>

      <div className="action-group bottom">
        <button className="right-sidebar-item help-btn" title="Help">
          <Help size={20} />
        </button>
      </div>
    </aside>
  );
};