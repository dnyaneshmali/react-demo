import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState<{ name: string, role?: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const userData = JSON.parse(userStr);
        setUser(userData);
      } catch (e) {
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) {
    return (
      <div className="dashboard-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ color: '#00f0ff', fontSize: '1.2rem' }}>Initializing Nexus Command Center...</p>
      </div>
    );
  }

  // Highcharts Options for "Agentic" feel
  const activityChartOptions: Highcharts.Options = {
    chart: {
      type: 'areaspline',
      backgroundColor: 'transparent',
      style: { fontFamily: 'Inter, sans-serif' },
      height: 300,
    },
    title: { text: '' },
    xAxis: {
      categories: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
      labels: { style: { color: '#a0a0b0' } },
      gridLineColor: 'rgba(255, 255, 255, 0.05)'
    },
    yAxis: {
      title: { text: '' },
      labels: { style: { color: '#a0a0b0' } },
      gridLineColor: 'rgba(255, 255, 255, 0.05)'
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.2,
        lineColor: '#00f0ff',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(0, 240, 255, 0.4)'],
            [1, 'rgba(0, 240, 255, 0)']
          ]
        },
        marker: { enabled: false }
      }
    },
    series: [
      {
        type: 'areaspline',
        name: 'Neural Computations',
        data: [120, 180, 250, 400, 310, 480, 520],
        color: '#00f0ff'
      }
    ],
    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: {
      backgroundColor: 'rgba(20, 20, 30, 0.9)',
      borderColor: '#00f0ff',
      style: { color: '#fff' }
    }
  };

  const statusChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      style: { fontFamily: 'Inter, sans-serif' },
      height: 300,
    },
    title: { text: '' },
    plotOptions: {
      pie: {
        innerSize: '75%',
        borderWidth: 0,
        dataLabels: { enabled: false }
      }
    },
    series: [
      {
        type: 'pie',
        name: 'Agents',
        data: [
          { name: 'Active Processing', y: 65, color: '#00f0ff' },
          { name: 'Deep Learning', y: 25, color: '#8a2be2' },
          { name: 'Standby Mode', y: 10, color: '#333344' }
        ]
      }
    ],
    tooltip: {
      backgroundColor: 'rgba(20, 20, 30, 0.9)',
      borderColor: '#00f0ff',
      style: { color: '#fff' }
    },
    credits: { enabled: false }
  };

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
        <div className="chart-container">
          <h3>System Activity Throughput</h3>
          <HighchartsReact highcharts={Highcharts} options={activityChartOptions} />
        </div>
        <div className="chart-container">
          <h3>Agent Resource Allocation</h3>
          <HighchartsReact highcharts={Highcharts} options={statusChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
