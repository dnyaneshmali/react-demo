export interface AgentRow {
  id: string;
  name: string;
  status: 'Active' | 'Training' | 'Idle';
  accuracy: number;
  tasksCompleted: number;
  lastActive: string;
}

export const columns = [
  { key: 'id', name: 'Agent ID', width: 100 },
  { key: 'name', name: 'Neural Model Name', resizable: true },
  {
    key: 'status',
    name: 'Status',
    width: 120,
    renderCell: (props: any) => {
      const status = props.row.status;
      let color = '#a0a0b0';
      if (status === 'Active') color = '#00f0ff';
      if (status === 'Training') color = '#8a2be2';
      return <span style={{ color, fontWeight: 'bold' }}>{status}</span>;
    }
  },
  { key: 'accuracy', name: 'Accuracy (%)', width: 120 },
  { key: 'tasksCompleted', name: 'Tasks Executed', width: 150 },
  { key: 'lastActive', name: 'Last Sync', resizable: true }
];

export const sampleAgents: AgentRow[] = [
  { id: 'NX-001', name: 'Alpha Cognition', status: 'Active', accuracy: 99.8, tasksCompleted: 15420, lastActive: '2 mins ago' },
  { id: 'NX-002', name: 'Beta Heuristics', status: 'Training', accuracy: 94.2, tasksCompleted: 340, lastActive: 'In progress' },
  { id: 'NX-003', name: 'Gamma Protocol', status: 'Idle', accuracy: 98.1, tasksCompleted: 8900, lastActive: '4 hours ago' },
  { id: 'NX-004', name: 'Delta Analysis', status: 'Active', accuracy: 99.1, tasksCompleted: 12050, lastActive: '1 min ago' },
  { id: 'NX-005', name: 'Epsilon Synthesis', status: 'Active', accuracy: 97.5, tasksCompleted: 4500, lastActive: '15 mins ago' },
  { id: 'NX-006', name: 'Zeta Optimization', status: 'Idle', accuracy: 96.8, tasksCompleted: 2100, lastActive: '1 day ago' },
  { id: 'NX-007', name: 'Sigma Logistics', status: 'Active', accuracy: 98.9, tasksCompleted: 8200, lastActive: 'Just now' },
  { id: 'NX-008', name: 'Omega Forecasting', status: 'Training', accuracy: 89.4, tasksCompleted: 120, lastActive: 'In progress' },
];
