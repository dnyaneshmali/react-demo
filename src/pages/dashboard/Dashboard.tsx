import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUserName(user.name || user.username);
      } catch (e) {
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', color: '#fff' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#00f0ff' }}>Dashboard</h1>
      {userName ? (
        <h2 style={{ fontSize: '2rem', fontWeight: 'normal' }}>
          Welcome, <span style={{ fontWeight: 'bold' }}>{userName}</span>!
        </h2>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
