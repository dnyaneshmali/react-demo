
import './App.css'
import Header from './components/header';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import { Suspense } from 'react';

function App() {

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet/>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App
