import { useForm, type SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

type Inputs = {
    username: string;
    password: string;
};

const Login = () => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoginError('');
        try {
            const response = await fetch('/users.json');
            const users = await response.json();
            
            const matchedUser = users.find(
                (u: any) => u.username === data.username && u.password === data.password
            );

            if (matchedUser) {
                localStorage.setItem('user', JSON.stringify(matchedUser));
                navigate('/dashboard');
            } else {
                setLoginError('Invalid username or password');
            }
        } catch (error) {
            setLoginError('Error during authentication');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                {/* Left Side: Agentic AI Theme */}
                <div className="login-left">
                    <div className="glowing-orb"></div>
                    <div className="glowing-orb orb-2"></div>
                    <div className="login-left-content">
                        <div className="ai-badge">AGENTIC AI PLATFORM</div>
                        <h3 className="agentic-title">Next-Gen Autonomous Intelligence</h3>
                        <p className="agentic-description">
                            Access the nexus of advanced multi-agent systems. Orchestrate complex workflows, deploy autonomous agents, and revolutionize your operations with our state-of-the-art cognitive engine.
                        </p>

                        <div className="feature-list">
                            <div className="feature-item">
                                <div className="feature-icon">⚡</div>
                                <span>Real-time orchestration</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🧠</div>
                                <span>Adaptive learning models</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🛡️</div>
                                <span>Enterprise-grade security</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="login-right">
                    <div className="login-form-container">
                        <h2>System Authentication</h2>
                        <p className="form-subtitle">Enter your credentials to access the nexus.</p>
                        
                        {loginError && <div className="error-message" style={{ textAlign: 'center', marginBottom: '15px', color: '#ff4d4d', backgroundColor: 'rgba(255, 77, 77, 0.1)', padding: '10px', borderRadius: '4px', border: '1px solid #ff4d4d' }}>{loginError}</div>}

                        <form onSubmit={handleSubmit(onSubmit)} className="login-form" noValidate>
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        id="username"
                                        {...register('username', { required: 'Username is required' })}
                                        className={errors.username ? 'error' : ''}
                                        placeholder="agent_alpha_01"
                                        autoComplete="off"
                                    />
                                    {errors.username && <span className="error-message">{errors.username.message}</span>}
                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-wrapper">
                                    <input
                                        type="password"
                                        id="password"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters',
                                            },
                                        })}
                                        className={errors.password ? 'error' : ''}
                                        placeholder="••••••••"
                                    />
                                    {errors.password && <span className="error-message">{errors.password.message}</span>}
                                </div>
                            </div>

                            <div className="form-actions">
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    <span>Remember session</span>
                                </label>
                                <a href="#" className="forgot-password">Lost keys?</a>
                            </div>

                            <button
                                type="submit"
                                className={`login-button ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Authenticating...' : 'Initialize Session'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;