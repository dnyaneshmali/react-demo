import { useState } from 'react';
import { DataGrid } from 'react-data-grid';
import 'react-data-grid/lib/styles.css';
import './Agents.css';

import { columns, sampleAgents, type AgentRow } from './agents.constants';

const Agents = () => {
  const [rows] = useState<AgentRow[]>(sampleAgents);

  return (
    <div className="agents-container">
      <div className="agents-header">
        <h1>Neural Agents Directory</h1>
        <p>Manage and monitor all deployed autonomous agents across the network.</p>
      </div>

      <div className="grid-container">
        <DataGrid
          columns={columns}
          rows={rows}
          className="rdg-dark agentic-grid"
          rowHeight={50}
        />
      </div>
    </div>
  );
};

export default Agents;
