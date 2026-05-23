import React, { useState } from 'react';
import './App.css';

const App = () => {
  // 1. Initialize state to track the active tab
  const [activeTab, setActiveTab] = useState('Home');

  // 2. Function to handle tab clicks
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="app-container">
      {/* Header Section (Remains constant across tabs) */}
      <header className="app-header">
        <div className="header-left">
          <div className="profile-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          <div className="user-info">
            <span className="user-name">MyGP User</span>
            <span className="user-phone">017****** <span className="dropdown-arrow"></span></span>
          </div>
        </div>
        <div className="header-right">
          <div className="notification">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="badge">8</span>
          </div>
          <div className="coin-icon">🪙</div>
        </div>
      </header>

      {/* 3. Main Content Area (Conditionally Rendered) */}
      <main className="main-content">
        {activeTab === 'Home' && (
          <div className="tab-content fade-in">
            {/* Search Bar */}
            <div className="search-container">
              <div className="search-bar">
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" placeholder='Search for "Netflix"' />
              </div>
            </div>

            {/* Hero Banners */}
            <div className="banner-carousel">
              <div className="banner left-banner"></div>
              <div className="banner main-banner">
                <div className="banner-content">
                  <div className="banner-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> 
                    সার্চ করলেই শপিং-এ
                  </div>
                  <h2 className="banner-title">১২০০০+</h2>
                  <p className="banner-subtitle">আউটলেট</p>
                  <p className="gp-star">GPStar অফার</p>
                  <button className="banner-btn">ক্লিক করুন</button>
                </div>
              </div>
            </div>

            {/* Main Dashboard Card */}
            <div className="dashboard-card">
              <div className="balance-section">
                <div className="taka-icon">৳</div>
                <div className="balance-info">
                  <span className="balance-label">Balance</span>
                  <span className="balance-amount">35.92 Tk</span>
                </div>
                <button className="recharge-btn">Recharge Now</button>
              </div>

              <div className="divider"></div>

              <div className="usage-section">
                <div className="usage-item">
                  <span className="icon blue">🌐</span>
                  <span className="usage-text">4.5 GB</span>
                  <span className="arrow">›</span>
                </div>
                <div className="usage-item">
                  <span className="icon red">📞</span>
                  <span className="usage-text">1.5 Min</span>
                  <span className="arrow">›</span>
                </div>
              </div>

              <div className="upsell-box">
                <div className="upsell-badge">You have low Minute</div>
                <div className="upsell-content">
                  <div className="upsell-text">
                    <h4>Get 520 Minutes</h4>
                    <p>for 30 days @ ৳335</p>
                  </div>
                  <span className="arrow blue-arrow">›</span>
                </div>
              </div>

              <div className="one-tap-footer">
                <span className="origami-icon">🕊️</span>
                <span>One Tap Enabled</span>
              </div>
            </div>

            {/* Auto Pay Banner */}
            <div className="auto-pay-banner">
              <div className="auto-pay-icon">💳</div>
              <div className="auto-pay-text">
                <h4>Setup Auto Pay</h4>
              </div>
              <span className="arrow white-arrow">›</span>
            </div>
          </div>
        )}

        {/* Placeholder Views for Other Tabs */}
        {activeTab === 'Offers' && (
          <div className="placeholder-view fade-in">
            <h2>🎁 Exclusive Offers</h2>
            <p>Check out the latest internet and minute packs tailored for you.</p>
          </div>
        )}

        {activeTab === 'Explore' && (
          <div className="placeholder-view fade-in">
            <h2>⊞ Explore</h2>
            <p>Discover new entertainment, sports, and lifestyle features.</p>
          </div>
        )}

        {activeTab === 'Services' && (
          <div className="placeholder-view fade-in">
            <h2>📡 Services</h2>
            <p>Manage your SIM, FnF numbers, and value-added services here.</p>
          </div>
        )}

        {activeTab === 'Account' && (
          <div className="placeholder-view fade-in">
            <h2>👤 My Account</h2>
            <p>Update your profile, view history, and manage payment methods.</p>
          </div>
        )}
      </main>

      {/* 4. Bottom Navigation (Dynamic Classes & Click Handlers) */}
      <nav className="bottom-nav">
        <div 
          className={`nav-item ${activeTab === 'Home' ? 'active' : ''}`} 
          onClick={() => handleTabClick('Home')}
        >
          <div className="icon">🏠</div>
          <span>Home</span>
        </div>
        
        <div 
          className={`nav-item ${activeTab === 'Offers' ? 'active' : ''}`} 
          onClick={() => handleTabClick('Offers')}
        >
          <div className="icon">🎁<span className="nav-dot"></span></div>
          <span>Offers</span>
        </div>
        
        <div 
          className={`nav-item ${activeTab === 'Explore' ? 'active' : ''}`} 
          onClick={() => handleTabClick('Explore')}
        >
          <div className="icon">⊞</div>
          <span>Explore</span>
        </div>
        
        <div 
          className={`nav-item ${activeTab === 'Services' ? 'active' : ''}`} 
          onClick={() => handleTabClick('Services')}
        >
          <div className="icon">📡</div>
          <span>Services</span>
        </div>
        
        <div 
          className={`nav-item ${activeTab === 'Account' ? 'active' : ''}`} 
          onClick={() => handleTabClick('Account')}
        >
          <div className="icon">👤</div>
          <span>Account</span>
        </div>
      </nav>
    </div>
  );
};

export default App;
