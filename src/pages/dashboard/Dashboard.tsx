import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService, type User } from '../../services/auth.service';
import { SystemActivityChart, AgentResourceChart } from '../../components/Charts';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authService.isLoggedIn()) {
      navigate('/login');
    } else {
      setUser(authService.getUser());
    }
  }, [navigate]);

  if (!user) {
    return (
      <div className="dashboard-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ color: '#00f0ff', fontSize: '1.2rem' }}>Initializing Nexus Command Center...</p>
      </div>
    );
  }

  // Charts are imported from Charts.tsx

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Nexus Command Center</h1>
          <p>Agentic Multi-Model Orchestration</p>
        </div>
        <div className="user-badge">
          <div className="user-avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #00f0ff, #8a2be2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem' }}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <span>{user.name}</span>
            <div className="user-role">{user.role || 'Operator'}</div>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🤖</div>
          <h2 className="stat-value">1,245</h2>
          <div className="stat-label">Agents Deployed</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <h2 className="stat-value">45.9k</h2>
          <div className="stat-label">Tasks Executed</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <h2 className="stat-value">99.8%</h2>
          <div className="stat-label">System Accuracy</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🧠</div>
          <h2 className="stat-value">42%</h2>
          <div className="stat-label">Neural Load</div>
        </div>
      </div>

      <div className="charts-grid">
        <SystemActivityChart />
        <AgentResourceChart />
      </div>
    </div>
  );
};

export default Dashboard;
